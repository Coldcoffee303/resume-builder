const express = require('express')
const {login, getlogin} = require('../../controller/authController')
var router = express.Router()

 
router.get('/auth/login',getlogin)

router.post('/auth/login',login)


module.exports = router