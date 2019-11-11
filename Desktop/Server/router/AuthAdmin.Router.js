const express = require('express');
const router = express.Router();
const AuthAdmin = require('../controller/AdminAuth.Controller')

router.post('/login_administration', AuthAdmin.postLoginAdmin);

module.exports = router