module.exports = (sequelize, DataTypes) => {

    let alias = "Product";

    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(10000),
            allowNull: true,
        },
        category_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        in_offer: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        in_home: {
             type: DataTypes.INTEGER(11),
            allowNull: true,
         },
        image: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
    };

    let config = {
        tableName:"products",
        timestamps: false,
        underscored: true,

    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Product_Category, {
            as: "product_category",
            foreignKey: "category_id"
            
        })
    }

    Product.associate = function (models) {
        Product.hasMany(models.Order, {
            as: "order",
            foreignKey: "product_id"
            
        })
    }

    return Product;
}