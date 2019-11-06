const express = require('express');
const router = express.Router();
const VoucherController = require('../controller/Voucher.Controller');

router.get('/', VoucherController.getAllVoucher);
router.post('/find_voucher', VoucherController.findVoucher);
router.post('/getVoucherByName', VoucherController.getVoucherByName);
router.post('/create_voucher', VoucherController.createVoucher);
router.post('/get_info_voucher', VoucherController.getInfoVoucher);
router.post('/update_info_voucher', VoucherController.updateInfoVoucher);
router.post('/delete_info_voucher', VoucherController.deleteInfoColor);

module.exports = router;
