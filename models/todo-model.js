const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  content: {
    type: String
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
