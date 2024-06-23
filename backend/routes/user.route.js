// const { verifyToken } = require('../auth/middleware.auth');
const usercontroller = require('../controller/user.controller')
const express = require('express');
const router = express.Router()

router.post('/api/user/signup', usercontroller.registerUser)
router.post('/api/user/login', usercontroller.loginUser)
router.get('/api/user/display', usercontroller.retrieveUsers)
router.get('/api/user/:id', usercontroller.getUser)
router.put('/api/user/update/:id', usercontroller.updateUser)
router.delete('/api/user/delete/:id', usercontroller.deleteUser)
router.post('/api/user/generateToken', usercontroller.purchasePower)
router.post('/api/user/validateToken', usercontroller.validateUserToken)
router.post('/api/user/verifyToken', usercontroller.verifyToken)

module.exports = router