var express = require('express');
const { indexPage, aboutPage } = require('../controller/index');
var router = express.Router();

/* GET home page. */
router.get('/', indexPage)

router.get('/about',aboutPage)

module.exports = router;
