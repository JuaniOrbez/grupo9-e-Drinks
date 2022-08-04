const fs = require('fs');
const path = require('path');
let db = require("../database/models");

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const inOffer = products.filter(product => product.inOffer == 'YES');
const inHome = products.filter(product => product.inHome == 'YES');

const mainController = {

    home: (req, res) => {
       
       let pedidoProductosInOffer = db.Product.findAll({where:{in_offer: 1}})
       let pedidoProductosInHome = db.Product.findAll({where:{in_home: 1}})
       let pedidoCategories = db.Product_Category.findAll()
       
       Promise.all([pedidoProductosInOffer,pedidoProductosInHome,pedidoCategories])

        .then (function([productsInOffer,productsInHome,categories]){
        res.render ('home',{categories:categories, productsInOffer:productsInOffer,productsInHome:productsInHome,
            user:req.session.userLogged},)})
    },
   error: (req, res) => {
        res.status (404).send('Not Found 404')
    },

   partials:
   (req, res) => {
    db.Product_Category.findAll()
    .then (function(categories){
    res.render ('/partials/header',{categories:categories},)})
},
}

module.exports = mainController