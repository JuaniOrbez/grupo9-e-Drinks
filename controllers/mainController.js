const mainController = {

    home: (req, res) => {
        res.render ('home')
    },

    productDetail: (req, res) => {
        res.render ('../products/productDetail')
    },

    productCart: (req, res) => {
        res.render ('../products/productCart')
    },

    register:  (req, res) => {
        res.render ('../users/register')
    },

    login: (req, res) => {
        res.render('../users/login')
    },

    error: (req, res) => {
        res.status (404).send('Not Found 404')
    }
}

module.exports = mainController