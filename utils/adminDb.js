var orientServer = require('./orientServer');

var adminDb = orientServer.use({
  name: 'ThoughtCab',
  username: 'root',
  password: 'password'
});
module.exports = adminDb;
