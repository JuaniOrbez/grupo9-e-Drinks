let db = require("../../database/models")
const Op = db.Sequelize.Op;
const http = 'http://localhost:3000'

module.exports = {
    
    list: (req, res) =>{
        db.User
        .findAll({
            attributes:  ["id", "email", "first_name", "last_name",[db.Sequelize.fn("CONCAT", http+'/apiUsers/user/', db.Sequelize.col("id")) ,"detail"]]
        })
        .then(users =>{
            return res.json({
                count: users.length,
                data: users
                })
            })   
    },

    detail:  (req, res) =>{
        db.User
        .findByPk(req.params.id,{
            attributes:["id","first_name","last_name","email",[db.Sequelize.fn("CONCAT", http+'/images/', db.Sequelize.col("image")) ,"image"]]
        })
        .then(user =>{
            return res.json({
                data: user,
            }
               )
        })    
    },
}