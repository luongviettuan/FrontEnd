const express = require('express');
const router = express.Router();

const ColorController = require('../controller/Color.Controller');

router.get('/', ColorController.getAllVoucher);
router.post('/find_color', ColorController.findColor);
router.post('/create_color',ColorController.createColor);
router.post('/get_info_color', ColorController.getInfoColor);
router.post('/update_info_color', ColorController.updateInfoColor);
router.post('/delete_info_color', ColorController.deleteInfoColor);
module.exports = router;