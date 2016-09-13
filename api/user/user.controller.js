'use strict';

var User = require('./user.model');
var logger = require('winston');

module.exports = {
  findAll : function(req, res){
    User.find().exec(function(err, data){
      res.json(data);
    });
  },

  findByAccount : function(req, res){
    if (req.params.account) {
      logger.log("debug", "START- findByAccount %s", req.params.account);
      User.find({username: req.params.account}).exec(function(err, data){
        res.json(data);
        logger.log("debug", "END- findByAccount");
      });
    } else {
      res.json([]);
    }
  },

  findByName : function(req, res){
    if (req.params.name) {
      User.find({name: {"$regex": req.params.name}}).exec(function(err, data){
        res.json(data);
      });
    } else {
      res.json([]);
    }
  }
}
