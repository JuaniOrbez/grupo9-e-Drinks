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
        timestamps: false,
        underscored: true,
    };

    const Order = sequelize.define(alias, cols, config);

    return Order;
}