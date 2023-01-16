var express = require('express');
var readController=require('../controllers/read-insert-contoller');
var router = express.Router();
// to display data 
router.get('/read', readController.listall);
module.exports = router;
