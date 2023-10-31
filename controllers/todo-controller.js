const Todo = require('../models/todo-model');

exports.createTodo = async (req, res) => {
    try {
      const todoData = new Todo({
        title:req.body.apple,
        author:req.body.ball,
        content:req.body.cat,
      });
      // Save the user to the database
      await todoData.save();
      res.status(201).send(todoData);
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  };
