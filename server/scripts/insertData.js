const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
const { Recipe, Ingredient, Recipe_Ingredient, HealthLabel} = require('../models')

// Read JSON data
const jsonData = fs.readFileSync(path.join(__dirname, 'data', 'Chicken', 'modified_chicken_recipes.json'), 'utf-8')
=======
const { Recipe, Recipe_Ingredient } = require('../models')
const { url } = require('inspector')

console.log('InsertData.js: Recipes:', Recipe)

// Read JSON data
const jsonData = fs.readFileSync(path.join(__dirname, 'data', 'chicken_recipes.json'), 'utf-8')
>>>>>>> dd194df9379339e7e5a14943723ac226dc573112
const recipesData = JSON.parse(jsonData);

// Insert data into Recipes table
recipesData.forEach(async (recipe) => {
  try {
<<<<<<< HEAD
    // insert data in recipe table # 1
    // const createdRecipe = await Recipe.create({
    //   title: recipe.recipeName,
    //   instructions: recipe.instructions.join('\n'), 
    //   total_time: recipe.totalTime,
    // })
    // avoid duplication
    const [createdRecipe, isCreated] = await Recipe.findOrCreate({
      where: { title: recipe.recipeName },
      defaults: {
        instructions: recipe.instructions.join('\n'), 
        total_time: recipe.totalTime,
      },
    })

    // insert data in ingredients table # 2
    await Promise.all(recipe.ingredients.map(async (ingredientData) => {
      const normalizedIngredientName = ingredientData.food.toLowerCase().trim()
      // console.log(normalizedIngredientName)

      const [ingredient] = await Ingredient.findOrCreate({
        where: { name: normalizedIngredientName },
      })
      //  console.log(created ? 'Created' : 'Already existed')
    

      // insert data in recipe_ingredients table
      // console.log('RECIPE_ID:' + createdRecipe.id)
      // console.log('INGREDIENT_ID:' + ingredient.id)
      // console.log('QUANTITY:' + ingredientData.quantity)
      // console.log('MEASURE:' + ingredientData.measure)

      // insert data in recipe_ingredient step # 3
      // await Recipe_Ingredient.create({
      //   recipe_id: createdRecipe.id,
      //   ingredient_id: ingredient.id,
      //   quantity: ingredientData.quantity,
      //   measure: ingredientData.measure,
      // })

      // insert data in healthLabel
      await Promise.all(recipe.healthLabels.map(async (healthLabelData) => {
        const [healthLabel] = await HealthLabel.findOrCreate({
          where: { label: healthLabelData },
        })

        console.log(`Health Label ${healthLabel.label} ${isCreated ? 'created' : 'already existed'}`)

        await createdRecipe.addHealthLabel(healthLabel)
      }))
    }))
  } 
  catch (error) {
    console.error('Error inserting', error)
=======
    const createdRecipe = await Recipe.create({
      title: recipe.label,
      instructions: recipe.url, // You might want to adjust this based on your data structure
      calories: recipe.calories,
      total_time: recipe.totalTime * 60,
    });

    await Promise.all(recipe.ingredients.map(async (ingredients) => {
      await Recipe_Ingredient.create({
        name: ingredients.food,
        quantity: ingredients.quantity,
        weight: ingredients.weight,
        recipe_id: createdRecipe.id,
      })
    }))
    console.log(`Inserted recipe: ${recipe.label}`)

  } catch (error) {
    console.error('Error inserting recipe:', error)
>>>>>>> dd194df9379339e7e5a14943723ac226dc573112
  }
})

console.log('Data insertion completed.')