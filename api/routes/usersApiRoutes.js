const express = require('express');
const router = express.Router();

const usersApiControllers = require('../controllers/usersApiControllers')

router.get("/users", usersApiControllers.list)
router.get("/users/:id", usersApiControllers.detail)

module.exports = router;