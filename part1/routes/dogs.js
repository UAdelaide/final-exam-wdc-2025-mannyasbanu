const express = require('express');
const router = express.Router();
// Import pool
const db = require('../db');

// Get Request for /api/dogs
router.get('/', async (req, res, next) => {
  try {
    // Query rows
    const [rows] = await db.query('SELECT Dogs.name AS dog_name, Dogs.size, Users.username AS owner_username FROM Dogs INNER JOIN Users ON Dogs.owner_id = Users.user_id;');
    res.json(rows);
  } catch (error) {
    // Error handling
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;