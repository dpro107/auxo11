//var createModel=require('../models/create-model');
const db=require('../database');

module.exports={
crudForm:async(req, res) =>{
  const responses= await db.query('SELECT * FROM test');
  res.render('insert-form', {fetchData:responses.rows});
},



createData:async(req,res)=>{
  
  const name=req.body.programme_name; 
  const  offer_price=req.body.offer_price; 
  const scholar=req.body.scholar;
 
 

   
  
  console.log(" record created");
  const response=await db.query("INSERT into test (name,offer_price) VALUES($1,$2,$3)",[name,offer_price]);
    //const {rows}=await db.query("INSERT INTO enrollment_data (customer_id) VALUES ($1)",[customer_id]);
  console.log(" record created");
  res.redirect('/trud/form');

  
  }
}