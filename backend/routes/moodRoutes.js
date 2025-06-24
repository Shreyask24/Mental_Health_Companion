const express = require("express");
const { addMood, getMood } = require("../controllers/moodController");

const router = express.Router()

router.post('/addMood', addMood)

router.get('/getMood', getMood)

module.exports = router;