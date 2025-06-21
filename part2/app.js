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

// Default root handler
app.get('/', (req, res) => {
  // Redirect to role dashboards
  if(req.session.user) {
    if(req.session.user.role === 'owner'){
      return res.redirect('/owner');
    }
    if(req.session.user.role === 'walker'){
      return res.redirect('/walker');
    }
    // Destroy session if user role uknown
    req.session.destroy();
  }
});

 // Otherwise redirect to login page
  res.sendFile(path.join(__dirname, '/public/index.html'));

// Authentication middleware
function loginCheck(req, res, next){
  if(req.session && req.session.user) return next();
  res.redirect('/');
}
function roleCheck(role){
  return function(req, res, next){
    if(!req.session.user){
      return res.status(401).redirect('/');
    }
    if(req.session.user.role === role) return next();
    res.status(403).send('Access denied');
  };
}

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

// Protected routes
app.get('/owner', loginCheck, roleCheck('owner'), (req, res) => {
  res.sendFile(path.join(__dirname, 'private/owner-dashboard.html'));
});
app.get('/walker', loginCheck, roleCheck('walker'), (req, res) => {
  res.sendFile(path.join(__dirname, 'private/walker-dashboard.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

// Export the app instead of listening here
module.exports = app;