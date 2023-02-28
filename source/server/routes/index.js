const express = require('express');
const router = express.Router();
const { uploadFile } = require('../middlewares/fileUpload');

//PRODUCT ROUTES
const {
  create,
  getProducts,
  getById,
  updateById,
  deleteById,
} = require('../controllers/product.controller');
router.post('/product', uploadFile('image'), create);
router.get('/products', getProducts);
router.get('/product/:id', getById);
router.put('/product/:id', uploadFile('image'), updateById);
router.delete('/product/:id', deleteById);

//CATEGORY ROUTES
const {
  createCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  categories,
} = require('../controllers/category.controller');
router.post('/category', createCategory);
router.get('/category', categories);
router.get('/category/:id', getCategoryById);
router.put('/category/:id', updateCategoryById);
router.delete('/category/:id', deleteCategoryById);

module.exports = router;
