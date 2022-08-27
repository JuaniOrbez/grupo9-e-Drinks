const express = require('express');
const router = express.Router();

const productsApiControllers = require('../controllers/productsApiControllers')

router.get("/products",productsApiControllers.list)
router.get("/products/:id",productsApiControllers.detail)
router.get("/categories",productsApiControllers.category)
module.exports = router;