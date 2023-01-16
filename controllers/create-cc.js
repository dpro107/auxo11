var createModel=require('../models/cc-model');
module.exports={
crudForm:function(req, res) {
    res.render('cc');
},
createData:function(req,res){
  const inputData= {
    email_address: req.body.email_address,
    country :      req.body.country
  };
createModel.createData(inputData,function(data){
      res.redirect('/crud/formcc');
      console.log(" record created");
    });
}

}