const express = require('express');
const router = express.Router();
const db = require('../models/db');
const loginCheck = require()

router.get('/', loginCheck, async(req, res) => {
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

module.exports = router;