var express = require('express');
var readController=require('../controllers/approval_controller');
var router = express.Router();
// to display data 
router.get('/read_approved', readController.listall);
module.exports = router;
