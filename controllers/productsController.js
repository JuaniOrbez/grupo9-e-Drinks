const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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