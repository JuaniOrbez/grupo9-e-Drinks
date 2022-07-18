module.exports = (sequelize, DataTypes) => {

    let alias = "Cart";

    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        } ,
        user_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        } ,
        user_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        } ,
        total: {
            type: DataTypes.DECIMAL(11,2),
            allowNull: false,
        }
    };

    let config = {
        tableName: "cart",
        timestamps: false,
    };

    const Cart = sequelize.define(alias, cols, config);

    return Cart;
}