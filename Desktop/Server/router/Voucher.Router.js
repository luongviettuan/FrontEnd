const express = require('express');
const router = express.Router();
const VoucherController = require('../controller/Voucher.Controller');

router.get('/', VoucherController.getAllVoucher);
router.post('/find_voucher', VoucherController.findVoucher);
router.post('/getVoucherByName', VoucherController.getVoucherByName);
router.post('/create_voucher', VoucherController.createVoucher);

module.exports = router;
