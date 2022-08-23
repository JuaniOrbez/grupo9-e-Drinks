const path = require('path');
const { body } = require('express-validator');

const validationsUsersRegister = [
    body("first_name")
        .notEmpty().withMessage("Debes ingresar un nombre")
        .isLength({min:2}).withMessage("Debes ingresar un nombre válido"),
    body("last_name")
        .notEmpty().withMessage("Debes ingresar un apellido")
        .isLength({min:2}).withMessage("Debes ingresar un apellido válido"),
    body("email")
        .notEmpty().withMessage("Debes ingresar un email").bail()
        .isEmail().withMessage("Debes ingresar un formato de email válido"),
    body("password")
        .notEmpty().withMessage("Debes ingresar una contraseña")
        .isLength({min:8}).withMessage("La contraseña debe tener un mínimo de 8 caracteres"),
    body("category_id")
        .notEmpty().withMessage("Debes seleccionar una opción"),
    body("age")
        .notEmpty().withMessage("Debes seleccionar una opción"),
    body('image')
        .custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
    
        if (!file) {
          throw new Error('Debes subir una imagen');
        } else {
          let fileExtension = path.extname(file.originalname);
          if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Los formatos de archivos permitidos son ${acceptedExtensions.join(', ')}`);
          }
        }
        return true;
       })
];

module.exports = validationsUsersRegister;