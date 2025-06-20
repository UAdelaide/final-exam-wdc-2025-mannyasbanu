const express = require('express');
const router = express.Router();
// Import pool
const db = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT Dogs.name, Dogs.size, Users.username FROM Dogs INNER JOIN Users ON Dogs.owner_id = Users.user_id;');
    res.send(rows);
  } catch (error) {

  }
});

module.exports = router;