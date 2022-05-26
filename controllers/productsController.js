const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {

    productList: (req, res) => {
        res.render('./products/productList', {products})
    },

    productDetail: (req, res) => {
        let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('./products/productDetail', {product})
    },

    productCart: (req, res) => {
        res.render('./products/productCart')
    },

    productCreate: (req, res) => {
        res.render('./products/productCreate')
    },

    productEdit: (req, res) => {
        let id = req.params.id
		let product = products.find(product => product.id == id)
        res.render('./products/productEdit', {product})
    },

    productUpdate: (req, res) => {
        // PENDIENTE RUTA POR PUT
    },

    productStore: (req, res) => {

        let image

        if (req.files[0] != undefined){
            image = req.files[0].filename
        }

        let newProduct = {
        id: products[products.length -1].id + 1,
        ...req.body,
        image : image
        }

        products.push(newProduct)

        fs.writeFileSync(productsFilePath, JSON.stringify(products));

        res.redirect('/products')
    },

    productDelete: (req, res) => {
        // PENDIENTE RUTA POR DELETE
    },
}
module.exports = productsController