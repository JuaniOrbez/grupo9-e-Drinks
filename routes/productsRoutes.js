const express = require('express');
const router = express.Router();
const productsController = require ('../controllers/productsController');

router.get ("/detail",productsController.productList);

router.get ("/detail/:id/",productsController.productDetail);

router.get ("/cart", productsController.productCart);

router.get ("/create", productsController.productCreate);
//router.post ("/", productsController.productStore);

router.get ("/:id/edit", productsController.productEdit);
//router.put ("/:id/edit", productsController.productUpdate);

//router.delete('/:id', productsController.productDelete); 

module.exports = router;