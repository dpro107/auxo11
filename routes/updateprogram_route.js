var express = require('express');
var createprogram=require("../controllers/create_program");
var updateprogram  = require("../controllers/create_program");
var router = express.Router();
// to display form
router.get('/insert', createprogram.crudForm);

router.post('/insert',createprogram.createData);
// to create data


// router.get('/update', updateprogram.crudForm);

// router.post('/update',updateprogram.updateData);


router.get('/update/:id', updateprogram.crudForm);

router.post('/update/:id',updateprogram.updateData);





// router.post('/create_program',createprogram.createData);


module.exports = router;
