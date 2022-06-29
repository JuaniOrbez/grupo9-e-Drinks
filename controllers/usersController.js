const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../models/User');

const usersController = {

    register: (req, res) => {
        res.render('./users/register')
    },

    login: (req, res) => {
        res.render('./users/login')
    },

    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if(userToLogin) {
            let passwordIsOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(passwordIsOk) {
                    return res.redirect('/')
            }
        }
        return res.render('./users/login', {
            errors: {
                email: {
                    msg: 'Credenciales invalidas, por favor chequea tu usuario y contraseña'
                }
            }
        });
},

    create: (req, res) => {

        const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0) {
			return res.render('./users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
        
		let userInDB = User.findByField('email', req.body.email);

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
			password: bcryptjs.hashSync(req.body.password, 10),
			image: req.file.filename
		}

		let userCreated = User.create(userToCreate);

		return res.redirect('/users/login');
    },
}

module.exports = usersController