const express = require('express');
const router = express.Router();

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
    body("email")
      .notEmpty().withMessage("Debes ingresar un email").bail()
      .isEmail().withMessage("Debes ingresar un formato de email válido"),
    body("password").notEmpty().withMessage("Debes ingresar una contraseña"),
    body("category").notEmpty().withMessage("Debes seleccionar una categoría"),
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

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware')
const upload = require ('../middlewares/multerMiddleware')
const validationsUsersRegister = require ('../middlewares/validationsMiddleware');


router.get ("/register",guestMiddleware ,usersController.register);
router.post("/register", upload.single("image"), validationsUsersRegister, usersController.create);

router.get ("/login",guestMiddleware,usersController.login);
router.post("/login", usersController.loginProcess);

router.get ("/profile",authMiddleware,usersController.profile);
router.get ("/logout",usersController.logout);
  
module.exports = router;