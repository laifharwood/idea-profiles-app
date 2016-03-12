var express = require('express');
var app = express();
var reDirApp = express();                               // create our app w/ express
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
//var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
//var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var fs = require('fs');
var https = require('https');
var http = require('http');
var privateKey = fs.readFileSync('sslcert/private.pem', 'utf8');
var certificate = fs.readFileSync('sslcert/public.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};
// configuration =================
// app.get('/favicon.ico', function(req, res){
//   res.send(./public/favicon.ico);
// });
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(require('./routes'));
// reDirApp.use(function requireHTTPS(req, res, next){
//   return res.redirect('https://' + req.headers.host + req.url);
//   next();
// });
// app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
// app.use(bodyParser.json());                                     // parse application/json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
// app.use(methodOverride());

// var httpsServer = https.createServer(credentials, app);
//var httpServer = http.createServer(app);
// httpServer.listen(process.env.PORT || 8080, function(){
//   console.log('app is listening on http');
// });
app.listen(process.env.PORT || 8080, function(){
  console.log('app is listening');
});
