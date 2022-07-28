const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const productsController = require ('../controllers/productsController');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      cb(null, './public/images')
    },

    filename: function (req, file, cb) {
      cb(null, file.fieldname + 'img' + Date.now() + path.extname(file.originalname))
    }
  })
  
const upload = multer({ storage: storage })


router.get ("/",productsController.productList);
router.get("/categories",productsController.categoriesList)

router.get("/whiskys",productsController.whisky);
router.get("/espumantes",productsController.espumante);
router.get("/cervezas",productsController.cerveza);
router.get("/gins",productsController.gin);
router.get("/vinos",productsController.vino);
router.get("/licores",productsController.licor);

router.get ("/detail/:id/",productsController.productDetail);

router.get ("/cart", productsController.productCart);

router.get ("/create", productsController.productCreate);
router.post ("/create", upload.single("image"), productsController.productStore);

router.get ("/:id/edit", productsController.productEdit);
router.put ("/:id/edit", upload.single("image"), productsController.productUpdate);

router.delete('/:id/delete', productsController.productDelete); 

router.get ("/categories/:id/",productsController.categoriesDetail);

module.exports = router;