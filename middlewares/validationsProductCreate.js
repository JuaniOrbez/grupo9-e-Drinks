const path = require('path');
const { body } = require('express-validator');

const validationsProductCreate = [
    body("name")
        .notEmpty().withMessage("Debes ingresar el nombre del producto")
        .isLength({min:5}).withMessage("El nombre del producto debe tener un mínimo de 5 caracteres"),
    body("description")
        .notEmpty().withMessage("Debes agregar una descripción del producto")
        .isLength({min:20}).withMessage("La descripción del producto debe tener un mínimo de 20 caracteres"),
    body('image')
        .custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
    
        if (!file) {
          throw new Error('Debes cargar una imagen para el producto');
        } else {
          let fileExtension = path.extname(file.originalname);
          if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Los formatos de archivos permitidos son ${acceptedExtensions.join(', ')}`);
          }
        }
        return true;
       })
];

module.exports = validationsProductCreate;