var express = require('express');
var router = express.Router();

router.use('/userIdeas', require('./userIdeas'));

module.exports = router
