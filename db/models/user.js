var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
  name: String,
  age: Number,
  username:  String,
  password: String
});

module.exports = mongoose.model('User', user);
