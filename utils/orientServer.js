var OrientDB = require('orientjs');

var orientServer = OrientDB({
  //host: 'localhost',
  host: 'db.thought.cab',
  port: 2424,
  username: 'root',
  password: 'password'
});

module.exports = orientServer;
