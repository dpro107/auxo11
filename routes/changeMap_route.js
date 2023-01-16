var express = require('express');
var changeMap =require("../controllers/changeMap_controller");
var router = express.Router();
// to display form
router.get('/insert', changeMap.fetch1);

// router.get('/update/:id', counsellorCreate.fetch2);
router.post('/insert',changeMap.createData);
// to create data

router.get('/update/:id', changeMap.fetch2);

router.post('/update/:id',changeMap.updateData);



// to create data
// router.post('/create_program',createprogram.createData);


module.exports = router;