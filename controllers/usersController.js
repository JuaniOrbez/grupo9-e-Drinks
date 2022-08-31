const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

let db = require("../database/models")
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {

    register: (req, res) => {
        res.render('./users/register')
    },
    
    create: (req, res) => {

        db.User.Create({
            first_name: req.body.first_name,
            last_name:req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            category_id: req.body.category_id,
            image:req.body.image,
            age: req.body.age
        })
        res.redirect("/users/profile")
    },

    login: (req, res) => {
        res.render('./users/login')
    },

    loginProcess: async (req, res) => {
        const userToLogin = await db.User.findOne({ where: { email: req.body.email } })

        if(userToLogin) {
            if (!bcryptjs.compareSync(req.body.password, userToLogin.password)){
           
            
            delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    return res.redirect('/users/profile')
            }
            else{
                return res.render('./users/login', {
                    errors: {
                        email: {
                            msg: 'Credenciales invalidas, por favor chequea tu usuario y contraseña'
                        }
                    }
                })
            }    
           
        }

        else {
            return res.render('./users/login', {
                    errors: {
                        email: {
                            msg: 'Credenciales invalidas, por favor chequea tu usuario y contraseña'
                        }
                    }
                });

        }
         
},
	profile:  (req, res) => {
        res.render('./users/profile', {
            user:req.session.userLogged
        })
    },

    logout: (req,res) =>{
        req.session.destroy();
        return res.redirect('/')
    },

    validaciones: async (req, res) => {

        const resultValidation = validationResult(req);
		

		if (resultValidation.errors.length > 0) {
			return res.render('./users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
        
		let userInDB = await db.User.findOne({ where: { email: req.body.email } })

		
        if (userInDB) {
            return res.render('./users/register', {
				errors: {
					email: {
						msg: "Este email ya está registrado"
					}
				},
				oldData: req.body
			});
		}

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, bcryptjs.genSaltSync(10)),
			image: req.file.filename
		}

		db.User.create(userToCreate);

		return res.redirect('/users/login');
    }, 

    edit: (req, res) => {
        db.User.findByPk(req.params.id)
        .then(function(user){
           res.render('./users/edit',{user})
        })
    },


    usersList:(req,res) => {
        db.User.findAll()
            .then(function(users) {
                res.render('./users/usersList', {users})
            })
     },

    
    update: (req, res) => {

        db.User.update({
            first_name: req.body.first_name,
            last_name:req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            category_id: req.body.category,
            image:req.body.image,
            age: req.body.age
        },{
            where: {
                id:req.params.id
            }
           
        });

        res.redirect("/") 
    },


}

module.exports = usersController