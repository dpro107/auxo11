var express = require('express');
var readController=require('../controllers/poat_batch');
var router = express.Router();
// to display data 
router.get('/post_batch', readController.listall);
module.exports = router;
