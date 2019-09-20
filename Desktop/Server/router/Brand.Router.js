const express = require('express');
const router = express.Router();
const BrandController = require('../controller/Brand.Controller')

router.get('/', BrandController.getAllBrand);

module.exports = router;