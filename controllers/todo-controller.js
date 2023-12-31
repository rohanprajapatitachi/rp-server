const Todo = require('../models/todo-model');

exports.createTodo = async (req, res) => {
  try {
    const todoData = new Todo({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
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
    res.status(200).send(allTodoData);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);

  }
};

exports.updateTodo = async (req, res) => {
  try {
    const userId = req.params.id;
    const payload = req.body;
    const updateUserData = await Todo.findByIdAndUpdate(userId, payload, { new: true });
    res.status(200).send(updateUserData);

  } catch (error) {
    console.error(error);
    res.status(error).send(error);

  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const userId = req.params.id;
    const deleteTodoData = await Todo.findByIdAndDelete(userId);
    res.status(200).send(deleteTodoData);
  } catch (error) {
    console.error(error)
    res.status(400).send(error);
  }
};

  exports.getSingleTodo = async (req, res) => {
    try {
      const singleTodoData = await Todo.findById(req.params.id);
      res.status(200).send(singleTodoData);
      console.log(singleTodoData, "singleTodoData")
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
};
