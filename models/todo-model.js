const mongoose = require("mongoose");
import { Schema } from "mongoose";

const todoSchema = new Schema {(
  title: "String",
  author: "String",
  content: "String",
)};

const Todo = mongoose.model('Todo',todoSchema);
