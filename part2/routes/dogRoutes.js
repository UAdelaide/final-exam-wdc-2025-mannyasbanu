const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/', loginCheck, async(req, res) => {
  try {
    const [dogs] = await db.query(`

    `);
    res.json(dogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dogs' });
  }
})

module.exports = router;