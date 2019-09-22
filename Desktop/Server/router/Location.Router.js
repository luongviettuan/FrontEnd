const express = require('express');
const router = express.Router();
const LocaltionController = require('../controller/Localtion.Controller')

router.get('/province', LocaltionController.getAllProvice)
router.post('/province', LocaltionController.getDistrictByProvince)

module.exports = router