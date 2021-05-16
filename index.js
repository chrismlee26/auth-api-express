//  Require Libraries
require('dotenv').config()

const express = require('express');
const expressValidator = require('express-validator');
const exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const assert = require('assert')

// App 
const app = express()

// Templating Engine
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(expressValidator());
app.use(cookieParser());

// Middleware
// app.use(express.static('public'));
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
    res.send('splash page')
});


// Controllers
require('./controllers/movies.js')

// Start Server
app.listen(3000, () => {
  console.log('Welcome to port localhost:3000!');
});

module.exports = app;