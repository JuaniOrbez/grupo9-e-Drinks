const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const productsController = require ('../controllers/productsController');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },

    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
const upload = multer({ storage: storage })


router.get ("/detail",productsController.productList);

router.get ("/detail/:id/",productsController.productDetail);

router.get ("/cart", productsController.productCart);

router.get ("/create", productsController.productCreate);
router.post ("/create", upload.any(), productsController.productStore);

router.get ("/:id/edit", productsController.productEdit);
router.put ("/:id/edit", productsController.productUpdate);

//router.delete('delete/:id', productsController.productDelete); 

module.exports = router;