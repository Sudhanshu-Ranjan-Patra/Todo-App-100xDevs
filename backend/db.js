/*
  Todo {
      title: String;
       desc: String;
      completed: bolean;
  }
 */

  //mongodb://127.0.0.1:27017/100xDevs

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/100xDevs")
const todoSchema = mongoose.Schema({
    title: String,
    desc: String,
    completed: Boolean,
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}