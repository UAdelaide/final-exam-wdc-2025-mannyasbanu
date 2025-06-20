const express = require('express');
const router = express.Router();
// Import pool
const db = require('../db');

router.get('/', async (req, res, next) => {
  try {
    var sql = `
    SELECT Dogs.name, Dogs.size, Users.username FROM Dogs
    INNER JOIN Users ON Dogs.owner_id = Users.user_id;
    `;
  } catch (error) {

  }
});

module.exports = router;