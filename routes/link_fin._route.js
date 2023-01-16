var express = require('express');
var readController=require('../controllers/link_fin');
var router = express.Router();
// to display data 
router.get('/link_fin', readController.listall);
module.exports = router;
