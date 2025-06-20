const express = require('express');
const router = express.Router();
// Import pool
const db = require('../db');

// GET request for /api/walkers/summary
router.get('/summary', async (req, res, next) => {
  try {
    // Query rows
    const [rows] = await db.query(`
      SELECT Users.username AS walker_username,
        COUNT(WalkRatings.rating_id) AS total_ratings,
        ROUND(AVG(WalkRatings.rating), 1) AS average_rating,
        COUNT(CASE WHEN WalkRequests.status = 'completed' THEN 1 END) AS completed_walks
      FROM Users
      LEFT JOIN WalkRatings ON Users.user_id = WalkRatings.walker_id
      LEFT JOIN WalkRequests ON Users.user_id = WalkRatings.walker_id AND WalkRequests.status = 'completed'
    `);
  } catch (error) {
    // Error handling
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;