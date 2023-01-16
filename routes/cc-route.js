var express = require('express');
var createController=require('../controllers/create-cc');
var router = express.Router();
// to display form
router.get('/formcc', createController.crudForm );
// to create data




///



////
router.post('/create',createController.createData);


module.exports = router;
