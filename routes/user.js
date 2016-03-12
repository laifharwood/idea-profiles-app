var express = require('express');
var router = express.Router();
var adminDb = require('../utils/adminDb');
var orientServer = require('../utils/orientServer');

router.post('/signup', function(req, res, next){
  adminDb.record.get('#4:1')
  .then(function(readerRole){
    adminDb.insert().into('OUser').set({
      name: req.query.email,
      firstName: req.query.firstName,
      lastName: req.query.lastName,
      password: req.query.password,
      status: 'ACTIVE',
      roles: readerRole
    }).one()
    .error(function(err){
      adminDb.close();
      res.status(409).send('A User with that email address already exists, or there was an error.');
      throw err;
    })
    .then(function(user){
      req.user = user;
      adminDb.close();
      next();
    });
  });
});

router.get('/login', function(req, res, next){
  var userDb = orientServer.use({
    name: 'ThoughtCab',
    username: req.query.email,
    password: req.query.password
  });
  userDb.select().from('OUser').where({name: req.query.email}).one()
  .error(function(err){
    throw err;
    adminDb.close();
    res.status(400).send('invalid')
  })
  .then(function (user){
    req.user = user;
    adminDb.close();
    next();
  });
});

module.exports = router
