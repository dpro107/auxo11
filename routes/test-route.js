var express = require('express');
var readController=require('../controllers/read_test');
var router = express.Router();
// to display data 
router.get('/read_test', readController.listall1);
module.exports = router;