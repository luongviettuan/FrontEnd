const express = require('express');
const router = express.Router();
const OrderController = require('../controller/Order.Controller');

router.get('/', OrderController.getAllOrder);

router.post('/delete/:orderId', OrderController.deleteOrder);
router.post('/create_order', OrderController.createOrder);
router.post('/get_order_by_user', OrderController.getOrderByUser);
router.post('/get_product_by_order', OrderController.getProductByOrder);
module.exports = router;
