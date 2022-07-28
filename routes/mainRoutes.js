const express = require('express');
const router = express.Router();
const mainController = require ('../controllers/mainController');
const productsController = require ('../controllers/productsController');

router.get ("/", mainController.home);

router.get ("*", mainController.error);
  
module.exports = router;