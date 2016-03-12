var express = require('express');
var router = express.Router();

router.use('/user', require('./user'), require('../utils/createToken'));
router.use('/api', require('../utils/auth'), require('../utils/getUser'), require('../utils/userDb'), require('./api/api'));
router.get('/favicon.ico', function(req, res){
  res.status(400).send('Favicon not found');
});
module.exports = router
