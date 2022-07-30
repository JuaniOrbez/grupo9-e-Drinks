const path = require('path');
const { check } = require('express-validator');

const validationsUsersRegister = [
    check("first_name")
        .notEmpty()
        .isLength({min:2})
        .withMessage("Debes ingresar un nombre"),
    check("last_name")
        .notEmpty()
        .isLength({min:2})
        .withMessage("Debes ingresar un apellido"),
    check("email")
        .notEmpty().withMessage("Debes ingresar un email").bail()
        .isEmail().withMessage("Debes ingresar un formato de email válido"),
    check("password")
        .notEmpty()
        .withMessage("Debes ingresar una contraseña"),
    check("age")
        .notEmpty()
        .withMessage("Debes seleccionar una opción"),
    check('image')
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