const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
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
