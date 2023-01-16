var db=require('../database')
module.exports={
editData:async(req,res)=>{
    const editId=req.params.id;
    const response= await db.query('SELECT * FROM test where id=$1 ',[editId]);
    const responses= await db.query('SELECT * FROM test');
      res.render('insert-form', { editData:response.rows[0]});
      console.log(" record fetched");
    
   
},
updateData:async(req,res)=>{
   
  // full_name: req.body.full_name,  
   //city : req.body.city, 
   //C : req.body.country, 
   const name=req.body.programme_name; 
  const  offer_price=req.body.offer_price; 
   

  
const updateId=req.params.id;
console.log("start updating")


  const response=await db.query("UPDATE test SET name=$1, offer_price=$3  WHERE id=$2",[name,updateId,offer_price]);
    res.redirect('/trud/read');
    console.log(" record(s) updated");
   
}
}
