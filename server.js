var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var parseurl = require('parseurl');

/******************************** Mongo DB ***************************/
var mongoose = require('mongoose');
mongoose.connect(' mongodb://admin:123456@ds033106.mlab.com:33106/techkids');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error: '));
db.once('open', function() {
  console.log('DB connection success! ');
});

/******************************** Express App ************************/
var app = express();
app.use(express.static(__dirname + "/client"));
app.use( bodyParser.json() );

require('./routes')(app);

/******************************** Session ****************************/
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(function (req, res, next) {
  var views = req.session.views

  if (!views) {
    views = req.session.views = {}
  }

  // get the url pathname
  var pathname = parseurl(req).pathname

  // count the views
  views[pathname] = (views[pathname] || 0) + 1

  next()
});

app.get('/foo', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
});

http.createServer(app).listen(8888);
