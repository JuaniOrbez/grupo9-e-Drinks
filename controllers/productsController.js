const productsController = {

    productDetail: (req, res) => {
        res.render('./products/productDetail')
    },

    productCart: (req, res) => {
        res.render('./products/productCart')
    },

    productCreate: (req, res) => {
        res.render('./products/productCreate')
    }
}

module.exports = productsController