const express = require('express');
const router = express.Router();
const markCompletedStatus = require('../controllers/mark_complete');


console.log('Grid router loaded!..');

router.get('/:id', markCompletedStatus.markcomplete);

module.exports = router