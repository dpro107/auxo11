var express = require('express');
var updateController=require('../controllers/ap_nap');
var router = express.Router();
// to edit data 
// to update data 
router.get('/update/:id/:approved', updateController.updateData);
module.exports = router;
