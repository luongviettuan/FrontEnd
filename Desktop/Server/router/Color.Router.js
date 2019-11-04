const express = require('express');
const router = express.Router();

const ColorController = require('../controller/Color.Controller');

router.get('/', ColorController.getAllVoucher);
router.post('/find_color', ColorController.findColor);
router.post('/create_color',ColorController.createColor);

module.exports = router;