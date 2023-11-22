module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    })

    Users.associate = (models) => {
        Users.hasOne(models.UserProfiles, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            as: 'UserProfiles', // This alias is important for eager loading
        });
    };

    return Users
}