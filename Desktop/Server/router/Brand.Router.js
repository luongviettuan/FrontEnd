const express = require('express');
const router = express.Router();
const BrandController = require('../controller/Brand.Controller')

router.get('/', BrandController.getAllBrand);
router.post('/find_info_brand', BrandController.findInfoBrand)
router.get('/:brandId', BrandController.getProductByBrand)
module.exports = router;