const express = require('express');
const router = express.Router();

const usersController = require ('../controllers/usersController');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware')
const upload = require ('../middlewares/multerMiddleware')
const validationsUsersRegister = require ('../middlewares/validationsUsersRegister');

router.get ("/register",guestMiddleware ,usersController.register);
router.post("/register", upload.single("image"), validationsUsersRegister, usersController.validaciones);

router.get ("/login",guestMiddleware,usersController.login);
router.post("/login", usersController.loginProcess);

router.get ("/profile",authMiddleware,usersController.profile);
router.get ("/logout",usersController.logout);

router.get("/usersList",usersController.usersList )

router.get ("/:id/edit", usersController.edit);
router.put ("/:id/edit", upload.single("image"), usersController.update);
  
module.exports = router;