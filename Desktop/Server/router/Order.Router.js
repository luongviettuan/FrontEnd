const express = require('express');
const router = express.Router();
const OrderController = require('../controller/Order.Controller');

router.get('/', OrderController.getAllOrder);

router.post('/delete/:orderId', OrderController.deleteOrder)

module.exports = router;
