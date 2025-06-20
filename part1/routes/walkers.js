const express = require('express');
const router = express.Router();
// Import pool
const db = require('../db');

// GET request for /api/walkers/summary
router.get('/summary', async (req, res, next) => {

});

module.exports = router;