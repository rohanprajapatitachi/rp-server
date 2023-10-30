const mongoose = require("mongoose");
const { Schema } = mongoose;
/**
 * What is schema ?
 * Ans: It rule to struture a collection.
 * We can define schema through only mongoose. Real mongodb is schemaless.
 * 
 * 
 * What does a new Schema does ?
 * Ans : Create a object for schema. that  object is rule
 * 
 * 
 * Where do we implement this schema ?
 * Ans: In a collection or model.
 * 
 * for example User model is present below: 
 * in real mongodb it will be stored as users (small letters with plural form)
 * 
 */

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const User = mongoose.model('User', userSchema);

module.exports = User;