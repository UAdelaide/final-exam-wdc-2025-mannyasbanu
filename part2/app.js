const express = require('express');
const path = require('path');
require('dotenv').config();

// Session and cookies
const session = require('express-session');
var cookieParser = require('cookie-parser');

const app = express();

// Session and cookie setup
app.use(cookieParser());
app.use(session({
  secret: 'aVerySecretKey',
  resave: false,
  saveUninitialized: true
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Authentication middleware

// Check if logged in
function loginCheck(req, res, next){
  if(req.session && req.session.user) return next();
  res.redirect('/');
}

// Check for role match
function roleCheck(role){
  return function(req, res, next){
    if(!req.session.user){
      return res.status(401).redirect('/');
    }
    if(req.session.user.role === role) return next();
    res.status(403).send('Access denied');
  };
}

// Redirect user according to role
app.get('/', req)
app.use(express.static(path.join(__dirname, '/public')));


// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

// Protected routes

// Serve owner dashboard
app.get('/owner', loginCheck, roleCheck('owner'), (req, res) => {
  res.sendFile(path.join(__dirname, 'private/owner-dashboard.html'));
});

// Serve walker dashboard
app.get('/walker', loginCheck, roleCheck('walker'), (req, res) => {
  res.sendFile(path.join(__dirname, 'private/walker-dashboard.html'));
});

// Export the app instead of listening here
module.exports = app;