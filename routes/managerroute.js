var express = require('express');
var createprogram=require("../controllers/managercontroller");
var updateprogram  = require("../controllers/managercontroller");
var router = express.Router();
// to display form
router.get('/insert', createprogram.fetch1);

router.get('/update/:id', createprogram.fetch2);

router.post('/insert',createprogram.createData);
// to create data


router.post('/update/:id',createprogram.updateData);
// to create data



///



////
// router.post('/create_program',createprogram.createData);


module.exports = router;
