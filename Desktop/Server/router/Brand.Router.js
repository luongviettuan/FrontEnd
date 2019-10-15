const express = require('express');
const router = express.Router();
const BrandController = require('../controller/Brand.Controller')

router.get('/', BrandController.getAllBrand);
router.get('/:brandId', BrandController.getProductByBrand)
module.exports = router;