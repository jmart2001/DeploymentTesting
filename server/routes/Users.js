const express = require("express")
const router = express.Router()
const { Users, Recipes, UserProfiles } = require("../models")
const jwt = require('jsonwebtoken')
const authenticate = require('../middlewares/authenticate');
const bcrypt = require("bcrypt")
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
        const user = await Users.findOne({
            where: { id: req.userId },
            include: [
                {
                    model: UserProfiles,
                    attributes: ['ingredients'],
                    as: 'UserProfiles',
                }
            ],
            attributes: ['username','email'],
        })

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        let responseData

        //Check if the userProfile exist 
        if (user.UserProfiles && user.UserProfiles.ingredients) {
            responseData = {
                username: user.username,
                email: user.email,
                ingredients: user.UserProfiles.ingredients,
            }
        }
        else {
            responseData = {
                username: user.username,
                email: user.email,
                ingredients: null,
            }
        }

        res.json(responseData)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/profile', authenticate, async (req, res) => {
    try {
        const { ingredients } = req.body

        const userProfile = await UserProfiles.findOne({
            where: { user_id: req.userId },
        })

        if (userProfile) {
            await userProfile.update({ ingredients })
        }
        else {
            await UserProfiles.create({
                user_id: req.userId,
                ingredients,
            })
        }
        res.json({ message: 'Profile updated successfully' })
    } 
    catch {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

module.exports = router