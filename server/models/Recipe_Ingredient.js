module.exports = (sequelize, DataTypes) => {
  const Recipe_Ingredient = sequelize.define("Recipe_Ingredient", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.FLOAT, 
      allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT, 
      allowNull: true,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Recipe_Ingredient.associate = (models) => {
      Recipe_Ingredient.belongsTo(models.Recipe, {
      foreignKey: 'recipe_id',
      onDelete: 'CASCADE',
    });
  };

  return Recipe_Ingredient
};