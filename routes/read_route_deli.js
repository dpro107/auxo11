var express = require('express');
var readController=require('../controllers/read_deli');
var router = express.Router();
// to display data 
router.get('/read_deli', readController.listall);
module.exports = router;
