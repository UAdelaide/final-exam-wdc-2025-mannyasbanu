const express = require('express');
const router = express.Router();
// Import pool
const db = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT Dogs.name AS dog_name, Dogs.size, Users.username AS owner_username FROM Dogs INNER JOIN Users ON Dogs.owner_id = Users.user_id;');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(400)({ error: error.message })
  }
});

module.exports = router;