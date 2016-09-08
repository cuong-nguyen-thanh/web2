var http = require("http");
var express = require("express");
var fileHelper = require("./fileHelper");
var statistic = require("./Statistic");


/******************************** DB *****************************/

var mongoose = require('mongoose');
var Class = require('./db/models/class');

mongoose.connect('mongodb://localhost/techkids1');

Class.find({name: "class2"}, function(err, data){
  console.log(data);
});

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

app.route("/api/file/:number")
      .get(function(req, res){
        statistic.getByNumber("data.txt", req.params.number, function(data){
          res.send(data);
        })

      })
      .delete(function(req, res){
        statistic.deleteByNumber("data.txt", req.params.number, function(data){
          res.send(data);
        })
      });



http.createServer(app).listen(8888);
