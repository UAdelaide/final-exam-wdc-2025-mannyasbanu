const express = require('express');
const router = express.Router();
const db = require('../models/db');
const { loginCheck } = require('../auth');

// GET request for owner dogs
router.get('/mine', loginCheck, async(req, res) => {
  try {
    // Query database
    const [dogs] = await db.query(`
      SELECT dog_id, name
      FROM Dogs
      WHERE owner_id = ?
    `, [req.session.user.user_id]);
    // Respond in JSON format
    res.json(dogs);
  } catch (error) {
    // Error handling
    res.status(500).json({ error: 'Failed to fetch dogs' });
  }
});

// GET request for all dogs
router.get('/', async (req, res, next) => {
  try {
    // Query rows
    const [rows] = await db.query(`
      SELECT , Dogs.name AS dog_name, Dogs.size, Users.username AS owner_username
      FROM Dogs
      INNER JOIN Users ON Dogs.owner_id = Users.user_id;
    `);
    res.json(rows);
  } catch (error) {
    // Error handling
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;