var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
var User = mongoose.model("User", userSchema);

module.exports.User = User;
