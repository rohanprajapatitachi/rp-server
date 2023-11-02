const express = require('express');
const userRouter = express.Router(); // Router bhaneko sub route ho haii like yo kasaiko under maa xa
const userController = require('../controllers/user-controller');

userRouter.post('/register', userController.registerUser);

userRouter.get('/get-all-users', userController.getAllUser);

userRouter.put('/update-user/:id', userController.updateUser);

userRouter.delete('/delete-user/:id', userController.deleteUser);

module.exports = userRouter
