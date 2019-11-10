const express = require('express')
var router = express.Router()

const ProductController = require('../controller/Product.Controller')
router.get('/', ProductController.getAllProduct);
router.post('/find_info_product', ProductController.findInfoProduct)
router.get('/search', ProductController.searchProductByName);
router.post('/create_info_product', ProductController.createInfoProduct);
router.get('/:productId', ProductController.getProductById);
router.post('/update_info_product', ProductController.updateInfoProduct)
router.post('/delete_info_product', ProductController.deleteInfoProduct)
module.exports  = router;
