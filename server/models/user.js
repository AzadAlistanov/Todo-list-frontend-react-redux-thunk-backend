const mongoose = require("mongoose");

require("dotenv").config();

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
    unique: true,
  },
  password: { 
    type: String,
    required: true,
    minlength: 2,
    maxlength: 500 
  },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
