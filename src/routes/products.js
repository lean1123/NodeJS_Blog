const express = require('express');
const router = express.Router();
const productsController = require('../app/controllers/ProductsController');

router.use('/:slug', productsController.show);
router.use('/', productsController.index);

module.exports = router;