const { Todo } = require('../models/todo');
const Joi = require('joi');

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    const filteredTodos = todos.filter(todo => todo.uid === req.user._id);
    res.send(filteredTodos);
    res.send(filteredTodos);
  } catch (error) {
    console.log(error.message)
  }
};

exports.addTodo = async (req, res) => {
  try {
    const { title, uid, complete } = req.body;
    let todo = new Todo({ title, uid, complete });
    todo = await todo.save();
    res.send(todo);
  } catch (error) {
  console.log(error.message)
}
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (todo.uid !== req.user._id)
      return res.status(401).send('Ошибка. Пользователь не авторизован...');

    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    
    res.send(deletedTodo);
  } catch (error) {
    console.log(error.message)
  }
};

exports.toggleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo.uid !== req.user._id)
      return res.status(401).send('Ошибка. Пользователь не авторизован...');

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { complete: !todo.complete },
      { new: true }
    );
    res.send(updatedTodo);
  } catch (error) {
    console.log(error.message)
  }
};

exports.editTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (todo.uid !== req.user._id)
      return res.status(401).send('Ошибка. Пользователь не авторизован...');

    const { title, uid, complete } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, uid, complete },
      { new: true }
    );
    res.send(updatedTodo);
  } catch (error) {
    console.log(error.message)
  }
};

