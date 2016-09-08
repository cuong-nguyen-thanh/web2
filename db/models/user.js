var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
  name:  String,
  age: Number,
  joined: { type: Date, default: Date.now },
  banned: Boolean
});

module.exports = mongoose.model('User', user);
