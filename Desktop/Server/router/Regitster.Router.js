const express = require('express');
const router = express.Router();
const RegitsterController = require('../controller/Regitster.Controller')

router.post('/', RegitsterController.regitster)

module.exports = router;