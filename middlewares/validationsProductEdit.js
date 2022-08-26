const path = require('path');
const { body } = require('express-validator');

const validationsProductEdit = [
    body("name")
        .notEmpty().withMessage("El campo Nombre no puede estar vacío")
        .isLength({min:5}).withMessage("El campo Nombre debe tener al menos 5 caracteres"),
    body("description")
        .notEmpty().withMessage("El campo Descripción no puede estar vacío")
        .isLength({min:20}).withMessage("La Descripción debe tener un mínimo de 20 caracteres"),
    body('image')
        .custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
    
        if (!file) {
          throw new Error('El campo Imagen no puede estar vacío');
        } else {
          let fileExtension = path.extname(file.originalname);
          if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Los formatos de archivos permitidos son ${acceptedExtensions.join(', ')}`);
          }
        }
        return true;
       })
];

module.exports = validationsProductEdit;