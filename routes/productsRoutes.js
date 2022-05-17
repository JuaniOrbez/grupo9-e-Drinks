const express = require('express');
const router = express.Router();
const productsController = require ('../controllers/productsController');

router.get ("/productdetail",productsController.productDetail);

router.get ("/productcart", productsController.productCart);

module.exports = router;