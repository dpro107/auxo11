var express = require('express');
var deleteadditionalbenefit=require("../controllers/deleteadditionalbenefit");
var router = express.Router();
// to display form
router.get('/delete', deleteadditionalbenefit.crudForm);

router.post('/delete',deleteadditionalbenefit.createData);
// to create data




///



////
// router.post('/create_program',createprogram.createData);


module.exports = router;
