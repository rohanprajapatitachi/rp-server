import mongoose from "mongoose";
import { Schema } from "mongoose";

const todoSchema = new Schema {(
  title: "String",
  author: "String",
  body: "String",
  comments: [{ body: String, date: Date }],
  date: {type: Date, default: Date.now }
)};

const Todo = mongoose.model('Todo',todoSchema);
