var express = require('express');
var createprogram=require("../controllers/programdeliverycontroller");
var router = express.Router();
// to display form
router.get('/insert', createprogram.fetch1);

router.get('/update/:name', createprogram.fetch2);
// router.get('/update/:id', createprogram.fetch2);


router.post('/update/:name',createprogram.createData);
// to create data


// router.post('/update/:name',createprogram.updateData);
// router.post('/update',createprogram.updateData);

// to create data



///



////
// router.post('/create_program',createprogram.createData);


module.exports = router;
