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
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    total_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  })

  Recipe.associate = (models) => {
    Recipe.hasMany(models.Recipe_Ingredient, {
        foreignKey: 'recipe_id',
        onDelete: 'CASCADE',
        as: 'Recipe_Ingredient', 
    });
};

  return Recipe
}
