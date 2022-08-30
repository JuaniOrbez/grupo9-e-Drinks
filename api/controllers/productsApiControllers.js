let db = require("../../database/models")
const Op = db.Sequelize.Op;



module.exports = {
    
    
    list: (req, res) =>{
      let pedidoProductos = db.Product.findAll({
        attributes:["id","name","description", ]
      })
      let countBycategory = db.Product.findAll({
        group:["category_id"],
        attributes:["category_id",[db.Sequelize.fn("COUNT",db.Sequelize.col("category_id")),"countByCategory"]]
      })

      Promise.all([pedidoProductos,countBycategory])
        .then(function([products,count]){
            res.json({
                count: products.length,
                data:products,
                countBycategory: count
            })
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