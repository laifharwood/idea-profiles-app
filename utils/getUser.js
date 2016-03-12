var adminDb = require('./adminDb');

var getUser = function(req, res, next){
  adminDb.record.get(req.decoded.iss)
  .error(function(err){
    res.end('there was an error finding your account.', 400);
    throw err;
  })
  .then(function(user){
    req.user = user;
    adminDb.close();
    next();
  });
};

module.exports = getUser;
