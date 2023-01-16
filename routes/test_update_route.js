var express = require('express');
var updateController=require('../controllers/test_update');
var router = express.Router();
// to edit data 
router.get('/edit/:id', updateController.fetch);
// to update data 
// router.post('/update/:id', updateController.updateData);
module.exports = router;