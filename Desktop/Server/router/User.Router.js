const express = require('express')
var router = express.Router()

const UserController = require('../controller/User.Controller');
//router.get('/login', UserController.login)
router.get('/get_all_user', UserController.getAllUser);
router.post('/find_user', UserController.findUser)
router.post('/login', UserController.postLogin);
router.post('/register', UserController.PostRegister);
router.post('/get_user_by_id', UserController.getUserById);
router.post('/update_user', UserController.updateUser);
router.post('/delete_user', UserController.deleteUser);
module.exports  = router;
