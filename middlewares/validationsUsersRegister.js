const path = require('path');
const { body } = require('express-validator');

const validationsUsersRegister = [
    body("first_name")
        .notEmpty().withMessage("El campo nombre no puede estar vacío")
        .isLength({min:2}).withMessage("Debes ingresar un nombre válido"),
    body("last_name")
        .notEmpty().withMessage("El campo apellido no puede estar vacío")
        .isLength({min:2}).withMessage("Debes ingresar un apellido válido"),
    body("email")
        .notEmpty().withMessage("El campo email no puede estar vacío").bail()
        .isEmail().withMessage("Debes ingresar un formato de email válido"),
    body("password")
        .notEmpty().withMessage("El campo contraseña no puede estar vacío")
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