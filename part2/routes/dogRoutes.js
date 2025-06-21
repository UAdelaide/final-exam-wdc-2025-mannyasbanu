const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/', loginCheck, async(req, res) => {
  try {
    const [dogs] = await db.query(``)
  } catch (error) {

  }
})

module.exports = router;