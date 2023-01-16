var express = require('express');
var panelsalescontrol=require("../controllers/panelsalescontroller");
var router = express.Router();
// to display form
router.get('/insert', panelsalescontrol.crudForm);

// router.post('/insert',panelsalescontrol.createData);
// to create data

// router.post('/create_program',createprogram.createData);


module.exports = router;
