const express = require('express');
const router = express.Router();
const deleteController =  require('../controllers/delete_items');


console.log('Grid router loaded!..');

// http://localhost:8000/deleteid/id:63b36e959feecc1ac044fb91

router.get('/:id', deleteController.home);


module.exports = router