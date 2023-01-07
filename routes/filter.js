const express = require('express');
const router = express.Router();
const filterController = require('../controllers/filter');

console.log('Grid router loaded!..');

router.get('/*', filterController.filter);

module.exports = router