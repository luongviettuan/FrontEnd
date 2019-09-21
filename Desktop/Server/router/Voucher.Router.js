const express = require('express');
const router = express.Router();
const VoucherController = require('../controller/Voucher.Controller');

router.get('/', VoucherController.getAllVoucher);

module.exports = router;
