var express = require('express');
var readController=require('../controllers/read-controller');
var router = express.Router();
// to display data 
router.get('/read', readController.listall);
module.exports = router;
