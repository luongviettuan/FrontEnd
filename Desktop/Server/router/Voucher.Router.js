const express = require('express');
const router = express.Router();
const VoucherController = require('../controller/Voucher.Controller');

router.get('/', VoucherController.getAllVoucher);
router.post('/getVoucherByName', VoucherController.getVoucherByName)
module.exports = router;
