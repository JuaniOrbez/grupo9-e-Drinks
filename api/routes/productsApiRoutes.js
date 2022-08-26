const express = require('express');
const router = express.Router();

const productsApiControllers = require('../controllers/productsApiControllers')

router.get("/",productsApiControllers.list)

module.exports = router;