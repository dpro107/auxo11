const db=require('../database')

module.exports={
  
updateData:async(req,res)=>{
    const approved=req.params.approved;
   

const comment=req.query.amount;
var url = require('url');
var url_parts = url.parse(req.url, true);
var query = url_parts.query;
console.log(query);



  ////

   const updateId=req.params.id;
   
  const response=await db.query("UPDATE enrollment_data SET post_batch_approval=$1,comment=$3 WHERE id=$2",
  [approved,updateId,comment]);
    res.redirect('/trud/post_batch');
    console.log(" record(s) updated");
  
}
}
