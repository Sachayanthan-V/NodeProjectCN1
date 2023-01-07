const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controllers');

console.log('router loaded!..');


router.get('/', homeController.home );
router.use('/grid',     require('./grid')           );
router.use('/deleteid', require('./delete')         );
router.use('/doneid',   require('./markComplete')   );
router.use('/filter',   require('./filter')         );
router.use('/filterstatus',   require('./filterStatus')         );


module.exports = router; 