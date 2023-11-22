module.exports = (sequelize, DataTypes) => {
    const UserProfiles = sequelize.define("UserProfiles", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    })

    UserProfiles.associate = (models) => {
        UserProfiles.belongsTo(models.Users, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
        })
    }

    return UserProfiles
}