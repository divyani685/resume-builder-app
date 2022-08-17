const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      default: " ",
    },
    lastname: {
      type: String,
      default: " ",
    },
    email: {
      type: String,
      default: " ",
    },
    mobile: {
      type: Number,
      default: " ",
    },
    portfolio: {
      type: String,
      default: " ",
    },
    carrier: {
      type: String,
      default: " ",
    },
    address: {
      type: String,
      default: " ",
    },
    education: { type: Array, default: [] },
    skills: { type: Array, default: [] },
    experience: { type: Array, default: [] },
    projects: { type: Array, default: [] },
  },

  { timestamps: true }
);
const usermodel = mongoose.model("app", userSchema);
module.exports = usermodel;
