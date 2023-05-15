const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('В доступе отказано. Не авторизован...');
  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = auth;
