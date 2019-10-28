const express = require('express');
const router = express.Router();
const ReviewController = require('../controller/Review.Controller')

router.get('/:productId', ReviewController.getAllCommentOfProduct);
router.post('/new_review', ReviewController.postNewReview);
module.exports = router;