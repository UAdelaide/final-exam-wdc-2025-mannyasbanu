const express = require('express');
const router = express.Router();
// Import pool
const db = require('../db');

router.get('/', async (req, res, next) => {
  try {
    var sql = `
    SELECT Dogs.name, Dogs.size, User.username FROM Dogs
    INNERJOIN User ON Dogs.owner_id = User.user_id
    `;
  } catch (error) {

  }
});

module.exports = router;