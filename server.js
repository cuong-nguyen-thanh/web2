var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var parseurl = require('parseurl');
var cookieParser = require('cookie-parser')
var auth = require('./api/auth/auth.service');
var passport = require('passport');
var mySecret = "techkids";

/******************************** Mongo DB ***************************/
var mongoose = require('mongoose');
//mongoose.connect('mongodb://admin:123456@ds033066.mlab.com:33066/techkidsweb2');
mongoose.connect('mongodb://localhost/techkids');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error: '));
db.once('open', function() {
  console.log('DB connection success! ');
});

/******************************** Express App ************************/
var app = express();
app.use(cookieParser('techkids', {maxAge: 120}));
app.use(session({
  secret: "techkids"
}));

//app.use('/admin', auth.hasRole('admin'), express.static(__dirname + "/client/admin"));
app.use('/', express.static(__dirname + "/client"));
app.use(bodyParser.json() );
app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app);

/******************************** Session ****************************/
// app.use(function (req, res, next) {
//   req.session.views;
//
//   if (!req.session.views) {
//     req.session.views = {}
//   }
//
//   // get the url pathname
//   var pathname = parseurl(req).pathname;
//
//   // count the views
//   req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
//
//
//   next()
// });
//
// app.get('/foo', function (req, res, next) {
//   console.log(req.cookies);
//   res.cookie("remember", true);
//   res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
// });

http.createServer(app).listen(process.env.PORT || 8888);
