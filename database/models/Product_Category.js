module.exports = (sequelize, DataTypes) => {

    let alias = "Product_Category";

    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    };

    let config = {
        timestamps: false,
        underscored: true,
    };

    const Product_Category = sequelize.define(alias, cols, config);

    Product_Category.associate = function (models) {
        Product_Category.hasMany(Product, {
            foreignKey: "category_id",
            as: "product"
        })
    }
    return Product_Category;
}