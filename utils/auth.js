var jwt = require('jwt-simple');
var tokenSecret = require('../utils/tokenSecret');
var getUser = require('./getUser');

module.exports = function(req, res, next){
  var token = req.cookies.token.token
  if (token){
    try{
      var decoded = jwt.decode(token, tokenSecret);
      if (decoded.exp <= Date.now()){
        res.end('access token has expired', 400);
      }else{
        //getUser(decoded.iss, req, res, next);
        req.decoded = decoded;
        next();
      }
    }catch (err){
      //Token is invalid
      console.log(err);
      res.end('access token is invalid', 400);
    }
  }else{
    //No Token sent
    res.end('no access token sent', 400);
  }
  //next();
};
