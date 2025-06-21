const express = require('express');
const path = require('path');
require('dotenv').config();

// Session
const session = require('express-session');

const app = express();

// Session setup
app.use(session)({
  secret:
  resave:
  saveUninitialized: true,
  cookie: { maxAge: 10}
})

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

// Export the app instead of listening here
module.exports = app;