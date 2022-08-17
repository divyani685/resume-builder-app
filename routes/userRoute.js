const express = require("express");
const app = express.Router();
const user = require("../models/userModel");
app.post("/login", async (req, res) => {
  try {
    const result = await user.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (result) {
      res.send(result);
    } else {
      res.status(400).json("login failed");
    }
  } catch (error) {
    res.status(400).json(error);
  }
});
app.post("/register", async (req, res) => {
  try {
    const newuser = new user(req.body);
    await newuser.save();
    res.send("Registration successfull!!!");
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});
app.post("/update", async (req, res) => {
  try {
    await user.findOneAndUpdate({ _id: req.body._id }, req.body);
    const User = await user.findOne({ _id: req.body._id });
    res.send(User);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});
module.exports = app;
