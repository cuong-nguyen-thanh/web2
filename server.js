var http = require("http");
var express = require("express");
var fileHelper = require("./fileHelper");
var statistic = require("./Statistic");
var bodyParser = require('body-parser')

/******************************** DB *****************************/

var mongoose = require('mongoose');
var User = require('./db/models/user');
mongoose.connect('mongodb://localhost/techkids');

// var class1 = new Class(
//   {
//     name: "class1",
//     students: [],
//     teacher: {name: "giaovien"},
//     startedDate: Date.now(),
//     total: 10
//   }
// );
//
// class1.save(function(err){
//   console.log(err)
// });

// var user = new User({name: "test"});
// user.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('saved');
//   }
// });

/*********************************************************************/

var app = express();
app.use(express.static(__dirname + "/client"));
app.use( bodyParser.json() );

app.route("/api/user/login")
      .post(function(req, res){
        if (req.body) {
          User.find({username: req.body.username, password: req.body.password}, function(err, data){
            if (data.length > 0) {
              res.json({status: true})
            } else {
              res.json({status: false})
            }
          });
        } else {
          res.json({status: false})
        }
      });


http.createServer(app).listen(8888);
