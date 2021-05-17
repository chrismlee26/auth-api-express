//  Require Libraries
require('dotenv').config()

const express = require('express');
const expressValidator = require('express-validator');
const exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

// App 
const app = express()

// Middleware
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

// Handlebars
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Authentication
var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
    req.user = null;
  } else {
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next();
};
app.use(checkAuth);


// Routes
app.get('/', (req, res) => {
    res.render('movies-new')
});

// Controllers
require('./controllers/movies.js')(app)
require('./controllers/auth.js')(app)

// Set db
require('./data/movies-db');

// Start Server
// app.listen(3000, () => {
//   console.log('Welcome to port localhost:3000!');
// });

app.listen(process.env.PORT || 3000, 
  () => console.log('server running...'))

module.exports = app;