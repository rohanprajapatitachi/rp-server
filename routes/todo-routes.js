const express = require('express');
const todoRouter = express.Router(); // Router bhaneko sub route ho haii like yo kasaiko under maa xa

todoRouter.get('/read', function (req, res, next) {
    res.send(" I am in the routes folder ");
});

todoRouter.get('/create', function (req, res, next) {
    res.send(" I am to create todo ");
});

todoRouter.get('/delete', function (req, res, next) {
    res.send(" I am to delete todo ");
});

module.exports = todoRouter