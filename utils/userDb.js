var orientServer = require('./orientServer');

module.exports = function(req, res, next){
  var userDb = orientServer.use({
    name: 'ThoughtCab',
    username: req.user.name,
    password: req.user.password
  });
  req.userDb = userDb;
  next();
};
