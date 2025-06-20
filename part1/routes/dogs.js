const express = require('express');
const router = express.Router();
// Import pool
const db = require('../db');

router.get('/', async (req, res, next) => {
  try {
    var sql = 'SELECT name, size, own FROM Dogs'
  } catch (error) {

  }
});

module.exports = router;