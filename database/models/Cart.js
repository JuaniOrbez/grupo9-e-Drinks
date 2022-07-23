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
        timestamps: false,
        underscored: true,
    };

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function (models) {
        Cart.hasOne(User, {
            foreignKey: "user_id",
            as: "user"
        })
    }

    Cart.associate = function (models) {
        Cart.hasMany(Order, {
            foreignKey: "cart_id",
            as: "order"
        })
    }

    Cart.associate = function (models) {
        Cart.belongsTo(Order, {
            foreignKey: "order_id",
            as: "order"
        })
    }

    return Cart;
}