const express = require('express')
const {login} = require('../../controller/authController')
var router = express.Router()

 
router.post('auth/login',login)


module.exports = router