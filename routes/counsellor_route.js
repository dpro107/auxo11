var express = require('express');
var counsellorCreate =require("../controllers/insert_couns_tl");
var router = express.Router();
// to display form
router.get('/insert', counsellorCreate.fetch1);

router.get('/update/:id', counsellorCreate.fetch2);

router.post('/insert',counsellorCreate.createData);
// to create data


router.post('/update/:id',counsellorCreate.updateData);
// to create data

// router.post('/create_program',createprogram.createData);


module.exports = router;
