var express = require('express');
var readController=require('../controllers/read_fin');
var router = express.Router();
// to display data 
router.get('/read_fin',checkAuth, readController.listall);
module.exports = router;
