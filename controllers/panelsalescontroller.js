const database = require('../database');
const db=require('../database');

module.exports={
crudForm:async(req, res)=> {
    res.render('panelsales');
    
},


createData:async(req,res)=>{
//  const item =req.body.item;
//  const price=req.body.price;
  console.log(" record created");
//   const response=await db.query("INSERT into additional_benefits(item,price) VALUES ($1,$2)",
//   [item,price]);

  console.log(" record created");
  res.redirect('/zrud/insert');
  }
}