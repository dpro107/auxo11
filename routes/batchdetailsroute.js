var express = require('express');
var createprogram=require("../controllers/batch_create");
var updateprogram  = require("../controllers/batch_create");
var router = express.Router();
// to display form
router.get('/insert', createprogram.fetch1);

router.get('/update/:batch_id', createprogram.fetch2);
// router.get('/update/:id', createprogram.fetch2);


router.post('/insert',createprogram.createData);
// to create data


router.post('/update/:batch_id',createprogram.updateData);
// router.post('/update',createprogram.updateData);

// to create data



///



////
// router.post('/create_program',createprogram.createData);


module.exports = router;
