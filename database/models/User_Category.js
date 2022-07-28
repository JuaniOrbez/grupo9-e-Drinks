module.exports = (sequelize, DataTypes) => {

    let alias = "User_Category";

    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        } ,
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        } 
    };

    let config = {
        tableName:"users_category",
        timestamps: false,
        underscored: true,
    };

    const User_Category = sequelize.define(alias, cols, config);

    User_Category.associate = function (models) {
        User_Category.hasMany(models.User, {
            foreignKey: "category_id",
            as: "user"
        })
    }

    return User_Category;
}