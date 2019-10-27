const express = require('express')
var router = express.Router()

const ProductController = require('../controller/Product.Controller')
router.get('/', ProductController.getAllProduct);
router.post('/find_info_product', ProductController.findInfoProduct)
router.get('/search', ProductController.searchProductByName);
router.get('/:productId', ProductController.getProductById)


module.exports  = router;
