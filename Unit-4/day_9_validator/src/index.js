const express = require('express');
const app = express();
const userController = require('./controllers/user.controller');

app.use(express.json())

app.get('/users', userController)
app.patch('/post', userController)

module.exports = app