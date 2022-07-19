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
         res.render('./products/productList', { products,user:req.session.userLogged })
     },

    whisky: (req, res) => {
        res.render('./products/whiskys', { whisky,user:req.session.userLogged })
    },

    espumante: (req, res) => {
        res.render('./products/espumantes', { espumante,user:req.session.userLogged })
    },

    cerveza: (req, res) => {
        res.render('./products/cervezas', { cerveza,user:req.session.userLogged })
    },

    gin: (req, res) => {
        res.render('./products/gins', { gin,user:req.session.userLogged })
    },

    vino: (req, res) => {
        res.render('./products/vinos', { vino,user:req.session.userLogged })
    },

    licor: (req, res) => {
        res.render('./products/licores', { licor,user:req.session.userLogged })
    },

    productDetail: (req, res) => {
        let id = req.params.id
        let product = products.find(product => product.id == id)
        res.render('./products/productDetail', { product,user:req.session.userLogged })
    },

    productCart: (req, res) => {
        res.render('./products/productCart')
    },

    productCreate: (req, res) => {
        res.render('./products/productCreate', {user:req.session.userLogged })
    },

    productEdit: (req, res) => {
        let id = req.params.id
        let product = products.find(product => product.id == id)
        res.render('./products/productEdit', { product,user:req.session.userLogged })
    },

    productUpdate: (req, res) => {
        let id = req.params.id
        let productToEdit = products.find(product => product.id == id)

        let image
        if (req.files[0] != undefined) {
            image = req.files[0].filename
        } else {
            image = productToEdit.image
        }

        productToEdit = { 
            id: productToEdit.id,
            ...req.body,
            image: image,
        }

        let modificar = products.map(newInfo => {

            if (newInfo.id == productToEdit.id) {

                return newInfo = {...productToEdit }
            }
            return newInfo
        })

        fs.writeFileSync(productsFilePath, JSON.stringify(modificar));

        res.redirect('/products/detail/' + productToEdit.id, {user:req.session.userLogged})
    },

    productStore: (req, res) => {

        let image

        if (req.files[0] != undefined) {
            image = req.files[0].filename
        } else {
            image = 'default-image.png'
        }

        let newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body,
            image: image
        }

        products.push(newProduct)

        fs.writeFileSync(productsFilePath, JSON.stringify(products));

        res.redirect('/products', {user:req.session.userLogged})
    },

    productDelete: (req, res) => {
        let id = req.params.id

        const indice = products.indexOf(products.find(product => product.id == id))

        products.splice(indice, 1)

        fs.writeFileSync(productsFilePath, JSON.stringify(products));

        res.redirect('/products',{user:req.session.userLogged})
    },
}
module.exports = productsController