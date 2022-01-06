const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

exports.signUp = async (req, res) => { 
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('Пользователь уже существует...');
  
    const { name, email, password } = req.body;
  
    user = new User({ name, email, password });
  
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  
    await user.save();

    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, 'secret')
  
    res.send(token);
  } catch (error) {
    console.log(error.message);
  }
};

exports.signIn = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Неправильный адрес электронной почты или пароль...');
  
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
      return res.status(400).send('Неправильный адрес электронной почты или пароль...');
  
    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, 'secret')
  
    res.send(token);  
    
  } catch (error) {
    console.log(error.message)
  }
};
