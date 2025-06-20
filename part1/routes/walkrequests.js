const express = require('express');
const router = express.Router();
// Import pool
const db = require('../db');

// GET request for /api/walkrequests/open
router.get('/open', async (req, res, next) => {
  try {
    const [rows] = await db.query(`
      SELECT WalkRequests.request_id, Dogs.name AS dog_name, WalkRequests.requested_time, WalkRequests.duration_minutes, WalkRequests.location, Users.username AS owner_username
      FROM WalkRequests
      INNER JOIN Dogs ON WalkRequests.dog_id = Dogs.dog_id
      
    `);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
})

module.exports = router;