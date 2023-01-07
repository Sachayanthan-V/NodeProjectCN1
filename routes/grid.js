const express = require('express');
const router = express.Router();
const gridHomeController = require('../controllers/home_grid_controller');
const homeController = require('../controllers/home_controllers');


console.log('Grid router loaded!..');


router.get('/changeGridState', gridHomeController.gridHome );
router.get('/*/changeGridState', gridHomeController.gridHome );
router.get('/*', homeController.home );


module.exports = router