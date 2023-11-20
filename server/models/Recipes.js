// models/Recipe.js

module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define("Recipe", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      calories: {
        type: DataTypes.INTEGER, // Assuming calories are numeric
        allowNull: false,
      },
      total_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Recipe;
  };
  