const express = require('express')
var router = express.Router()

const CategoryController = require('../controller/Category.Controller')
router.get('/:categoryId', CategoryController.getProductOfCategory)

module.exports  = router;