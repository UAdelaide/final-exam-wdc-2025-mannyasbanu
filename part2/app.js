const express = require('express');
const path = require('path');
require('dotenv').config();

// Session and cookies
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

// Session and cookie setup
app.use(cookieParser());
app.use(session({
  secret: 'aVerySecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000000 }
}));

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// Middleware functions
function loginCheck(req, res, next){
  if(req.session.user) return next();
}

function roleCheck(role){
  return function(req,res,next)
}

// Serve owner dashboard


// Serve walker dashboard

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

// Export the app instead of listening here
module.exports = app;