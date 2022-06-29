const { validationResult } = require('express-validator');
const User = require('../data/models/User');

const usersController = {

    register: (req, res) => {
        res.render('./users/register')
    },

    login: (req, res) => {
        res.render('./users/login')
    },

    create: (req, res) => {

        const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
        
		let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar: req.file.filename
		}

		let userCreated = User.create(userToCreate);

		return res.redirect('/user/login');
    },
}

module.exports = usersController