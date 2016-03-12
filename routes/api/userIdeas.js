var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  //console.log(req.cookies);
  console.log('At userIdeas')
  console.log(req.userDb);
  res.send('User Ideas Requested')
});

module.exports = router
