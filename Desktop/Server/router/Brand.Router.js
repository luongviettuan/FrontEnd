const express = require('express');
const router = express.Router();
const BrandController = require('../controller/Brand.Controller')

router.get('/', BrandController.getAllBrand);
router.post('/find_info_brand', BrandController.findInfoBrand)
router.get('/:brandId', BrandController.getProductByBrand)
router.post('/create_info_brand', BrandController.createInfoBrand);
router.post('/get_info_brand', BrandController.getInfoBrand)
router.post('/update_info_brand', BrandController.updateInfoBrand);
router.post('/delete_info_brand', BrandController.deleteInfoBrand)
module.exports = router;