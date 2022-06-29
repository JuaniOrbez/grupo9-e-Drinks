const express = require('express');
const router = express.Router();

const usersController = require ('../controllers/usersController');

const guestMiddleware = require('../middlewares/guestMiddleware')
const upload = require ('../middlewares/multerMiddleware')
const validationsUsersRegister = require ('../middlewares/validationsMiddleware');


router.get ("/register",guestMiddleware ,usersController.register);
router.post("/register", upload.single("image"), validationsUsersRegister, usersController.create);

router.get ("/login",usersController.login);
router.post("/login", usersController.loginProcess);

router.get ("/profile",usersController.profile);
  
module.exports = router;