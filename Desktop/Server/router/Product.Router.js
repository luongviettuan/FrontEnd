const express = require('express')
var router = express.Router()

const ProductController = require('../controller/Product.Controller')
router.get('/', ProductController.getProduct)

module.exports  = router;
