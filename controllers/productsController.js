const fs = require('fs');
const path = require('path');
let db = require("../database/models")

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {

    productList: (req, res) => {
         db.Product.findAll()
            .then(function(products) {
                res.render('./products/productList', { products,user:req.session.userLogged })
            })
        
        // res.render('./products/productList', { products,user:req.session.userLogged })
     },

   
     categoriesList:(req,res) => {
        db.Product_Category.findAll()
            .then(function(categories) {
                res.render('./products/productCategory', {categories:categories})
            })
     },


     categoriesDetail: (req, res) => {

       let pedidoProductos = db.Product.findAll({where:{category_id: req.params.id}})
       let pedidoCategories = db.Product_Category.findAll()
       let pedidoCategory = db.Product_Category.findByPk(req.params.id)

       Promise.all([pedidoProductos,pedidoCategory,pedidoCategories])
         .then(function([products,category,categories]){
            res.render('./products/productsCategories',{products:products, category:category, categories:categories})
         })
       
    },


   
    productDetail: (req, res) => {

        db.Product.findByPk(req.params.id)
         .then(function(product){
            res.render('./products/productDetail',{product:product})
         })
        
    },

    productCart: (req, res) => {
        res.render('./products/productCart')
    },

    productCreate: (req, res) => {
        res.render('./products/productCreate', {user:req.session.userLogged })
    },

    productEdit: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(function(product){
           res.render('./products/productEdit',{product:product})
        })

    },

    productUpdate: async (req, res) => {

        await db.Product.update({
            name: req.body.name,
            description:req.body.description,
            category_id: req.body.category,
            size: req.body.size,
            price: req.body.price,
            image:req.body.image,
            in_offer: req.body.inOffer,
            in_home: req.body.inHome
        },{
            where: {
                id:req.params.id
            }
           
        }).then (function(product){
            res.redirect('/products/detail/' + req.params.id)
        })
        

        
    },

    productStore: async (req, res) => {

        
        await db.Product.create({
            name: req.body.name,
            description:req.body.description,
            category_id: req.body.category,
            size: req.body.size,
            price: req.body.price,
            image: req.file.filename,
            in_offer: req.body.inOffer,
            in_home: req.body.inHome
            
        }) 
           .then (function(){res.redirect('/products')})
        
        
        
        
    },
    
    productDelete: function(req,res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/products')
    }
    
}
module.exports = productsController