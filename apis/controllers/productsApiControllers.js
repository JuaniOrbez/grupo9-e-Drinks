let db = require("../../database/models")
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) =>{
        return res.json('hola')
    }
}