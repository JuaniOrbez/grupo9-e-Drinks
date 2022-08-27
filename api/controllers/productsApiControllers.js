let db = require("../../database/models")
const Op = db.Sequelize.Op;



module.exports = {
    
    
    list: (req, res) =>{
        db.Product
        .findAll()
        .then(products =>{
            return res.json({
                count: products.length,
                url:'api/products',
                data: products,
            }
               )
        })

        
    },

    detail:  (req, res) =>{
        db.Product
        .findByPk(req.params.id)
        .then(product =>{
            return res.json({
                data: product,
            }
               )
        })    
    },

    category: (req,res) =>{
        db.Product_Category.findAll({include: ["products"]})
        .then(categories =>{
            return res.json({
                count: categories.length,
                data: categories,
                });
                
            
        })
    },
}