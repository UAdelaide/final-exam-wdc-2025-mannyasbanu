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
    // Query total ratings
    for (const walker of walkers) {
      const ratings = await db.query(`
        SELECT COUNT(WalkRatings.rating_id)
        FROM WalkRatings
        INNER JOIN Users ON WalkRatings.walker_id = Users.user_id
        WHERE Users.username = '?'
      `, [walker.username]);
      walker.total_ratings = ratings;
    });
  } catch (error) {
    // Error handling
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;