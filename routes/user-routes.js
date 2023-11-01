const express = require('express');
const userRouter = express.Router(); // Router bhaneko sub route ho haii like yo kasaiko under maa xa
const userController = require('../controllers/user-controller');

userRouter.post('/register', userController.registerUser);

userRouter.get('/getallusers', userController.getAllUser);

// userRouter.get('/deleteuser', function (req, res, next) {
//     res.send(" I am to create todo ");
// });

// userRouter.get('/updateuser', function (req, res, next) {
//     res.send(" I am to delete todo ");
// });

module.exports = userRouter