const express = require('express'); 
const todoRouter = express.Router(); // Router bhaneko sub route ho haii like yo kasaiko under maa xa
const todoController = require("../controllers/todo-controller");

todoRouter.post('/createtodo', todoController.createTodo );



module.exports = todoRouter