const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  uid: String,
  complete: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

exports.Todo = Todo;
