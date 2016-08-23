var http = require("http");
var express = require("express");

var app = express()
            .use(express.static(__dirname + "/client"))
            .use("/api/hello", function(req, res){
              res.end("hello");
            })
            .use("/api/about", function(req, res){
              res.end("About Us");
            })
            .use("/*", function(req, res){
              res.end("Others");
            });

http.createServer(app).listen(8888);
