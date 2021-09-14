const express = require("express");
let router = express.Router();
let { User } = require("../models/user");
var bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User with given Email already exist");
  user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  if (req.body.password === req.body.confirmPassword) {
    let salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);

    await user.save();

    return res.send(user);
  }
  return res.status(400).send("Password not matched");
});
router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User Not Registered");
  let isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).send("Invalid Password");
  res.send("Login Successfuly");
});
module.exports = router;
