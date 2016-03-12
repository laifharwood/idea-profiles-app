var moment = require('moment');
var jwt = require('jwt-simple');
var tokenSecret = require('./tokenSecret');

module.exports = function(req, res){
  var userId = '#' + req.user['@rid'].cluster + ':' + req.user['@rid'].position;
  var expires = moment().add(30, 'days').valueOf();
  var token = jwt.encode({
    iss: userId,
    exp: expires
  }, tokenSecret);
  res.cookie('token', {'token': token}, {httpOnly: true, secure: true})
  res.status(200).send('You have a token');
}
