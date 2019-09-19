const express = require('express')
var router = express.Router()

const UserController = require('../controller/User.Controller');
//router.get('/login', UserController.login)
router.post('/login', UserController.postLogin)
router.post('/register', UserController.PostRegister)

module.exports  = router;
