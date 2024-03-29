module.exports = (sequelize, DataTypes) => {

    let alias = "Order";

    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        } ,
        cart_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        } ,
        product_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        } ,
        cantidad: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        } ,
        subtotal: {
            type: DataTypes.DECIMAL(11,2),
            allowNull: false,
        }
    };

    let config = {
        tableName: "order",
        timestamps: false,
        underscored: true,
    };

    const Order = sequelize.define(alias, cols, config);

    Order.associate = function (models) {
        Order.belongsTo(models.Product, {
            foreignKey: "product_id",
            as: "product"
        })
    }

    Order.associate = function (models) {
        Order.hasMany(models.Cart, {
            foreignKey: "cart_id",
            as: "cart"
        })
    }

    Order.associate = function (models) {
        Order.belongsTo(models.Cart, {
            foreignKey: "order_id",
            as: "cart"
        })
    }

    return Order;
}