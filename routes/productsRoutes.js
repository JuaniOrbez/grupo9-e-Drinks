const express = require('express');
const router = express.Router();

const productsController = require ('../controllers/productsController');
const upload = require ('../middlewares/multerMiddleware')
const validationsProductCreate = require ('../middlewares/validationsProductCreate');


router.get ("/",productsController.productList);
router.get("/categories",productsController.categoriesList)



router.get ("/detail/:id/",productsController.productDetail);

router.get ("/cart", productsController.productCart);

router.get ("/create", productsController.productCreate);
router.post ("/create", upload.single("image"), validationsProductCreate, productsController.productStore);

router.get ("/:id/edit", productsController.productEdit);
router.put ("/:id/edit", upload.single("image"), productsController.productUpdate);

router.delete('/:id/delete', productsController.productDelete); 

router.get ("/categories/:id/",productsController.categoriesDetail);

module.exports = router;