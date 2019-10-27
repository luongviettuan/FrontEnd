const express = require('express')
var router = express.Router()

const CategoryController = require('../controller/Category.Controller')
router.get('/', CategoryController.getAllCategory);
router.post('/find_category', CategoryController.findCategory);
router.get('/:categoryId', CategoryController.getProductOfCategory);

module.exports  = router;