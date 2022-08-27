let db = require("../../database/models")
const Op = db.Sequelize.Op;

module.exports = {
    
    list: (req, res) =>{
        db.User
        .findAll()
        .then(users =>{
            return res.json({
                count: users.length,
                data: users.forEach((user =>{
                    return ([user.id, user.first_name, user.last_name, user.email])
                }))
            }
            )            
        })
    },

    detail:  (req, res) =>{
        db.User
        .findByPk(req.params.id)
        .then(user =>{
            return res.json({
                data: ([user.id, user.first_name, user.last_name, user.email]),
            }
               )
        })    
    },
}