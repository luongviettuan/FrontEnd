const express = require('express')
var router = express.Router()

const ProductController = require('../controller/Product.Controller')
router.get('/', ProductController.getAllProduct);
router.get('/search', ProductController.searchProduct);
router.get('/:productId', ProductController.getProductById)


module.exports  = router;
