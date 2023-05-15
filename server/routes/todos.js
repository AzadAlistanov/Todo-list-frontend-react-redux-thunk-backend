const express = require("express");
const router = express.Router();

const { 
  getAllTodos, addTodo, editTodo, toggleTodo, deleteTodo 
} = require('../controllers/todosController');
const auth = require('../middleware/auth');

router.get('/', auth, getAllTodos);
router.post('/addtodo', auth, addTodo);
router.patch('/toggletodo/:id', auth, toggleTodo);
router.delete('/deletetodo/:id', auth, deleteTodo);
router.put('/editTodo/:id', auth, editTodo);

module.exports = router;
