const path = require('path');
const { body } = require('express-validator');

const validationsUsersRegister = [
    
    body("first_name").notEmpty().withMessage("Debes ingresar un nombre"),
    body("last_name").notEmpty().withMessage("Debes ingresar un apellido"),
    body("email")
      .notEmpty().withMessage("Debes ingresar un email").bail()
      .isEmail().withMessage("Debes ingresar un formato de email válido"),
    body("password").notEmpty().withMessage("Debes ingresar una contraseña"),
    // body("category_id").notEmpty().withMessage("Debes seleccionar una categoría"),
    body("age").notEmpty().withMessage("Debes seleccionar una opción"),
    body('image').custom((value, { req }) => {
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