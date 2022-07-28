module.exports = (sequelize, DataTypes) => {

    let alias = "User";

    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        } ,
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        } ,
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        } ,
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false,
        } ,
        category_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        } ,
        age: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(50),
            allowNull: true,
        } ,
    };

    let config = {
        tableName:"users",
        timestamps: false,
        underscored: true,
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.User_Category, {
            foreignKey: "category_id",
            as: "user_category"
        })
    }

    User.associate = function (models) {
        User.hasOne(models.Cart, {
            foreignKey: "user_id",
            as: "cart"
        })
    }

    return User;
}