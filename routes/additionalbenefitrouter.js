var express = require('express');
var createprogram=require("../controllers/additionalbenefitcreate");

var router = express.Router();
// to display form
router.get('/insert', createprogram.fetch1);

router.get('/update/:id', createprogram.fetch2);


// to create data


router.post('/update/:id',createprogram.updateData);
// to create data

router.get('/insert', createprogram.crudForm);

router.post('/insert',createprogram.createData);

module.exports = router;
