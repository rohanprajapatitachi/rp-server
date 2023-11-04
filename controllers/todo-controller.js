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

  exports.getAllTodo = async (req, res) => {
    try {
      const allTodoData = await Todo.find();
      console.log("allTodoData~~~~~>", allTodoData);
      res.status(200).send(allTodoData);
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
      
    }
  };

  exports.updateTodo = async(req, res) => {
    try {
      const userId = req.params.id;
      const payload = req.body;
      const updateUserData = await Todo.findByIdAndUpdate(userId,payload, {new:true});
      res.status(200).send(updateUserData);
      
    } catch (error) {
      console.error(error);
      res.status(error).send(error);
      
    }
  };