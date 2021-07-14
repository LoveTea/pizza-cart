const Router = require('express').Router();
const productController = require('../controllers/product-controller');

Router.route('/').get(productController.getProducts);

module.exports = Router;
