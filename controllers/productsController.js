const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const whisky = products.filter(product => product.category == 'Whisky');
const espumante = products.filter(product => product.category == 'Espumante');
const cerveza = products.filter(product => product.category == 'cerveza');
const gin = products.filter(product => product.category == 'GIN');
const vino = products.filter(product => product.category == 'Vino');
const licor = products.filter(product => product.category == 'LICOR');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {

    productList: (req, res) => {
        res.render('./products/productList', {products})
    },

    whisky: (req,res) => {
        res.render('./products/whiskys', {whisky})
    },
    
    espumante: (req,res) => {
        res.render('./products/espumantes', {espumante})
    },

    cerveza: (req,res) => {
        res.render('./products/cervezas', {cerveza})
    },

    gin: (req,res) => {
        res.render('./products/gins', {gin})
    },

    vino: (req,res) => {
        res.render('./products/vinos', {vino})
    },

    licor: (req,res) => {
        res.render('./products/licores', {licor})
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
        }else{
            image = 'default-image.png'
        }

        let newProduct = {
        id: products[products.length -1].id + 1,
        ...req.body,
        image : image
        }

        products.push(newProduct)

        fs.writeFileSync(productsFilePath, JSON.stringify(products));

        res.redirect('/products/detail')
    },

    productDelete: (req, res) => {
        // PENDIENTE RUTA POR DELETE
    },
}
module.exports = productsController