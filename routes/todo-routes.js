// routes/todo-routes.js

const express = require('express');
const router = expess.Router();

const todoController = require('../controllers/todo-controller.js');

router.get('/todos', todo-controller.getAllTodos);

module.exports = router;
