const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');
const usersController = require ('../controllers/usersController');

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
      cb(null, './public/images/users')
    },

    filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
  })
  
const upload = multer({ storage: storage })

//Validaciones
const validationsUsersRegister = [
    body("first_name").notEmpty().withMessage("Debes ingresar un nombre"),
    body("last_name").notEmpty().withMessage("Debes ingresar un apellido"),
    body("email").isEmail().withMessage("Debes ingresar un email válido"),
    body("password").notEmpty().withMessage("Debes ingresar una contraseña"),
    body("category").notEmpty().withMessage("Debes seleccionar una categoría"),
];

router.get ("/register",usersController.register);
router.post("/register", upload.single("image"), validationsUsersRegister, usersController.create);

router.get ("/login",usersController.login);
router.post("/login", usersController.loginProcess);

router.get ("/profile",usersController.profile);
  
module.exports = router;