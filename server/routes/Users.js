const express = require("express")
const router = express.Router()
<<<<<<< HEAD
const { Users, Recipe, Recipe_Ingredient, FridgeIngredient, DietaryRestrictions, Sequelize  } = require("../models")
const jwt = require('jsonwebtoken')
const authenticate = require('../middlewares/authenticate')
const bcrypt = require("bcrypt")
=======
const { Users, Recipe, Recipe_Ingredient, FridgeIngredient, Sequelize  } = require("../models")
const jwt = require('jsonwebtoken')
const authenticate = require('../middlewares/authenticate');
const bcrypt = require("bcrypt");
>>>>>>> c60e6ec0bc497e8fb3f71975dfaeaad204e000c0
const saltRounds = 10


// Register a new user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    if (password.length < 8) {
        return res.status(400).json({ error: 'Password must be at least 8 characters long' })
    }

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        
        const newUser = await Users.create({
            username: username, 
            email: email, 
            password: hashedPassword,
        })

        res.status(201).json({ user: newUser })
    } catch (error) {
        // Handle unique constraint violation (username or email already exists)
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ error: 'Username or email is already in use. Please choose a different one.' });
        }
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body 
    try{
        const foundUser = await Users.findOne({
            where: { username },
        })

        if (foundUser) {
            const passwordMatch = await bcrypt.compare(password, foundUser.password)
            if (passwordMatch){
                const token = jwt.sign({ userId: foundUser.id }, 'skey', { expiresIn: '5h' });
                res.json({ message: 'Login successful', token })
            } else {
                res.status(401).json({ error: 'Invalid credentials' })
            }
        }
        else {
            res.status(401).json({ error: 'Invalid credentials' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// Logout
router.post('/logout', authenticate, async (req, res) => {
    try {
        await req.session.destroy();
        res.clearCookie('connect.sid');
        res.json({ message: 'Logout successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/profile', authenticate, async (req, res) => {
    try {
        //Check if the user exists
        const user = await Users.findOne({
            where: { id: req.userId },
            attributes: ['username', 'email']
        })

        if(!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        const responseData = {
            username: user.username,
            email: user.email,
        }

        res.json(responseData)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/profile_ingredient_list', authenticate, async (req, res) => {
    console.log('hit post ingredient_list route')
    console.log('Request payload:', req.body)
    try {
      const { name, quantity } = req.body;

      const trimmedIngredientName = name.trim()

      console.log('trimmedIngredientName:', trimmedIngredientName)

      const recipeIngredient = await Recipe_Ingredient.findOne({
        where: { 
            name: {
                [Sequelize.Op.like]: `%${trimmedIngredientName}%`, 
            },
        },
      })

      if (recipeIngredient) {
        console.log('Recipe Ingredient:', recipeIngredient.name)
      }
      else {
        console.error('Recipe ingredient not found for: ', trimmedIngredientName)
        res.status(404).json({ error: 'Recipe ingredient not found.' })
        return
      }

      // Check if the ingredient already exists in the user's profile
      const [userProfile, created] = await FridgeIngredient.findOrCreate({
        where: { 
            user_id: req.userId,
            ingredients_id: recipeIngredient.id,
        },
        defaults: {
            quantity: quantity,
          },
      })
    
      console.log('Recipe Ingredient ID:', recipeIngredient.id)

      // handle case if the user profile already has the ingrendient 
      if (!created) {
        //console.log('User already has this ingredient!')
        await userProfile.update({ quantity: quantity })
        console.log('Quantity updated for existing ingredient:', recipeIngredient.id)
      }
      else{

      }
        // Create a new FridgeIngredient instance
         

      res.json({ message: 'Fridge updated successfully' })
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/saved_ingredients', authenticate, async (req, res) => {
    console.log('hit get_ingredient_list route');
    
    try {
        const userProfile = await FridgeIngredient.findAll({
            where: { user_id: req.userId },
            include: [
                {
                    model: Recipe_Ingredient,
                    as: 'Recipe_Ingredient',
                    attributes: ['name'],
                },
            ],
        })

        if (userProfile && userProfile.length > 0) {
            const savedIngredients = userProfile.map(entry => ({
                name: entry.Recipe_Ingredient.name,
                quantity: entry.quantity,
            }))
            res.json({ savedIngredients })
        } else {
            // no FridgeIngredient entry exists
            console.error('User profile not found.')
            res.status(404).json({ error: 'User profile not found.' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.delete('/delete_ingredient', authenticate, async (req,res) => {
    console.log('hit the delete route')
    try {
        const { name } = req.body

        console.log('Deleting ingredient with name:', name)

        const recipeIngredient = await Recipe_Ingredient.findOne({
            where: { 
                name: {
                    [Sequelize.Op.like]: `%${name}`,
                }, 
            },
        }) 

        if (!recipeIngredient) {
            console.error('Recipe ingredient not found for: ', name)
            return res.status(404).json({ error: 'Recipe ingredient not found.' })
        }

        const deletedRows = await FridgeIngredient.destroy({
            where: {
                user_id: req.userId,
                ingredients_id: recipeIngredient.id,
            },
        })

        if (deletedRows > 0){
            console.log('Ingredient deleted successfully from Fridge.')
            const updatedUserProfile = await FridgeIngredient.findAll({
                where: { user_id: req.userId },
                include: [
                    {
                        model: Recipe_Ingredient,
                        as: 'Recipe_Ingredient',
                        attributes: ['name'],
                    },
                ],
            })

            const updatedSavedIngredients = updatedUserProfile.map(
                (entry) => ({
                    name: entry.Recipe_Ingredient.name,
                    quantity: entry.quantity,
                })
            )

            return res.json({ savedIngredients: updatedSavedIngredients })
        }
        else {
            console.error('Ingredient not found in user profile')
            return res.status(404).json({ error: 'Ingredient not found in user profile.' })
        }
    }
    catch(error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

<<<<<<< HEAD
router.post('/dietaryRestrictions', authenticate, async (req, res) => {
    console.log('hit diet route')
    try{
        const userId = req.userId
        const selectedRestrictions = req.body
        console.log('Selected Dietary Restrictions:', selectedRestrictions)

        const dietaryRestrictions = await DietaryRestrictions.findOne({
            where: { user_id: userId }
        })

        const dietaryRestrictionsData = {
            user_id: userId,
            Mediterranean: selectedRestrictions.mediterranean || false,
            DairyFree: selectedRestrictions.dairyFree || false,
            GlutenFree: selectedRestrictions.glutenFree || false,
            WheatFree: selectedRestrictions.wheatFree || false,
            EggFree: selectedRestrictions.eggFree || false,
            PeanutFree: selectedRestrictions.peanutFree || false,
            TreeNutFree: selectedRestrictions.treeNutFree || false,
            FishFree: selectedRestrictions.fishFree || false,
            ShellfishFree: selectedRestrictions.shellfishFree || false,
            PorkFree: selectedRestrictions.porkFree || false,
            RedMeatFree: selectedRestrictions.redMeatFree || false,
            CrustaceanFree: selectedRestrictions.crustaceanFree || false,
            CeleryFree: selectedRestrictions.celeryFree || false,
            MustardFree: selectedRestrictions.mustardFree || false,
            SesameFree: selectedRestrictions.sesameFree || false,
            LupineFree: selectedRestrictions.lupineFree || false,
            MolluskFree: selectedRestrictions.molluskFree || false,
            Kosher: selectedRestrictions.kosherFree || false,
        }

        if (!dietaryRestrictions) {
            dietaryRestrictions = await DietaryRestrictions.create(
                dietaryRestrictionsData
            )
        }
        else{
            await dietaryRestrictions.update(dietaryRestrictionsData)
        }

        res.status(200).json({ message: 'Dietary restrictions saved successfully' })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.get('/dietaryRestrictionslist', authenticate, async(req,res) => {
    console.log('hit get dietaryRestrictions route')
    try {
        const userId = req.userId

        // Find existing dietary restrictions for the user
        const dietaryRestrictions = await DietaryRestrictions.findOne({
            where: { user_id: userId }
        })

        if (!dietaryRestrictions) {
            return res.status(404).json({ error: 'Dietary restrictions not found for the user.' })
        }

        // Extract relevant dietary restrictions
        const savedRestrictions = {
            mediterranean: dietaryRestrictions.Mediterranean,
            dairyFree: dietaryRestrictions.DairyFree,
            glutenFree: dietaryRestrictions.GlutenFree,
            wheatFree: dietaryRestrictions.WheatFree,
            eggFree: dietaryRestrictions.EggFree,
            peanutFree: dietaryRestrictions.PeanutFree,
            treeNutFree: dietaryRestrictions.TreeNutFree,
            fishFree: dietaryRestrictions.FishFree,
            shellfishFree: dietaryRestrictions.ShellfishFree,
            porkFree: dietaryRestrictions.PorkFree,
            redMeatFree: dietaryRestrictions.RedMeatFree,
            crustaceanFree: dietaryRestrictions.CrustaceanFree,
            celeryFree: dietaryRestrictions.CeleryFree,
            mustardFree: dietaryRestrictions.MustardFree,
            sesameFree: dietaryRestrictions.SesameFree,
            lupineFree: dietaryRestrictions.LupineFree,
            molluskFree: dietaryRestrictions.MolluskFree,
            kosher: dietaryRestrictions.Kosher,
        }

        res.status(200).json({ savedRestrictions })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
    
})

=======
>>>>>>> c60e6ec0bc497e8fb3f71975dfaeaad204e000c0
module.exports = router