var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
  username:  String,
  password: String,
  clazz: {
    type: String,
    ref: "Class"
  }
});

module.exports = mongoose.model('User', user);
