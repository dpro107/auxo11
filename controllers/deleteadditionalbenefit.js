const database = require('../database');
const db=require('../database');

module.exports={
crudForm:async(req, res)=> {
    res.render('deleteadditionalbenefit');
    
},


createData:async(req,res)=>{
 const item =req.body.item;
 
  console.log(" record created");
  const response=await db.query('DELETE FROM additional_benefits where item = $1',[item]);


  console.log(" record created");
  res.redirect('/drud/delete');
  }
}