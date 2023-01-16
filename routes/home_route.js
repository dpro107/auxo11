var express = require('express');
var readController=require('../controllers/hom');
var router = express.Router();
// to display data 
router.post('/dashboard',readController.listall);
router.get('/dashboard',readController.listall);
module.exports = router;