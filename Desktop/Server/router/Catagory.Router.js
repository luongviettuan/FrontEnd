const express = require('express')
var router = express.Router()

const CatagoryController = require('../controller/Catagory.Controller')
router.get('/:catagoryId', CatagoryController.getItemOfCatagory)

module.exports  = router;