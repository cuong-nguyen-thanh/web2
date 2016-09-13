var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');

var logger = require('winston');
logger.add(logger.transports.File, { filename: 'techkids.log' });
logger.remove(logger.transports.Console);
logger.level = 'debug';

// logger.log('info', 'Hello distributed log files!');
// logger.info('Hello again distributed logs');
// logger.error('Hello again distributed logs');
//
//
// logger.log('debug', 'Now my debug messages are written to console!');

/******************************** Mongo DB ***************************/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/techkids');

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



http.createServer(app).listen(8888);
