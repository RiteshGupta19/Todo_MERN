const express = require('express');
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');

// GET all todos, POST new todo
router.route('/')
  .get(getTodos)
  .post(createTodo);

// PUT update todo, DELETE todo
router.route('/:id')
  .put(updateTodo)
  .delete(deleteTodo);

module.exports = router;
