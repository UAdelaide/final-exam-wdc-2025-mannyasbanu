const express = require('express');
const router = express.Router();
// Import pool
const db = require('../db');

// GET request for /api/walkrequests/open
router.get('/open', async (req, res, next) => {
  try {
    [rows]
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
})

module.exports = router;