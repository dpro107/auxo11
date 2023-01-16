var express = require('express');
var readController=require('../controllers/login');
var router = express.Router();
// to display data 
router.get('/tlogin', readController.crudForm);
module.exports = router;
