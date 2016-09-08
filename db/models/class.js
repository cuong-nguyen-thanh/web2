var mongoose = require("mongoose");

var Person = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  DOB: Date
})

var Clazz = new mongoose.Schema({
  name: String,
  students: [Person],
  teacher: Person,
  startedDate: Date,
  total: Number
})

module.exports = mongoose.model("Class", Clazz);
