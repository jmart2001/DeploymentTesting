const fs = require('fs');
const path = require('path');
const { Recipe } = require('../models'); 

console.log('InsertData.js: Recipes:', Recipe)

// Read JSON data
const jsonData = fs.readFileSync(path.join(__dirname, 'data', 'pork_recipes.json'), 'utf-8')
const recipesData = JSON.parse(jsonData);

// Insert data into Recipes table
recipesData.forEach(async (recipe) => {
  try {
    await Recipe.create({
      title: recipe.label,
      instructions: JSON.stringify(recipe.ingredientLines), // You might want to adjust this based on your data structure
      calories: recipe.calories,
      total_time: recipe.totalTime,
    });
    console.log(`Inserted recipe: ${recipe.label}`)
  } catch (error) {
    console.error('Error inserting recipe:', error)
  }
});

console.log('Data insertion completed.')
