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
        timestamps: false,
        underscored: true,
    };

    const User = sequelize.define(alias, cols, config);

    return User;
}