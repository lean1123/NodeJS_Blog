const express = require('express');
const router = express.Router();

const productsController = require('../app/controllers/ProductsController');

router.get('/create', productsController.create);
router.post('/store', productsController.store);
router.get('/:id/edit', productsController.edit);
router.post('/handle-form-actions', productsController.handleFormActions);
router.put('/:id', productsController.update);
router.patch('/:id/restore', productsController.restore);
router.delete('/:id', productsController.destroy);
router.delete('/:id/force', productsController.forceDestroy);
router.get('/:slug', productsController.show);

module.exports = router;
