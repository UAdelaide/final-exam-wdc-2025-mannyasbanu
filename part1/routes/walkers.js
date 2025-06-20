const express = require('express');
const router = express.Router();
// Import pool
const db = require('../db');

// GET request for /api/walkers/summary
router.get('/summary', async (req, res, next) => {
  try {
    // Query walkers
    const [walkers] = await db.query(`
      SELECT username AS walker_username
      FROM Users
      WHERE role = 'walker';
    `);
    res.json(walkers);
  } catch (error) {
    // Error handling
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;