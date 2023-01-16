var express = require('express');
var createprogram=require("../controllers/benefitcontroller");
var updateprogram  = require("../controllers/benefitcontroller");
var router = express.Router();
// to display form
router.get('/insert', createprogram.fetch1);

router.get('/update/:item', createprogram.fetch2);
// router.get('/update/:item', createprogram.deleteData);

router.get('/insert', createprogram.crudForm);
router.post('/insert',createprogram.createData);
// to create data


router.post('/update/:item',createprogram.updateData);
router.post('/update/:item',createprogram.deleteData);

// to create data



///



////
// router.post('/create_program',createprogram.createData);


module.exports = router;
