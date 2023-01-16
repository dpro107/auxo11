const db=require('../database')

module.exports={
  
updateData:async(req,res)=>{
    const approved=req.params.approved;
    const pre_batch_comment=req.query.amount;
   

    var url = require('url');
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log(query);
    
  


  ////

   const updateId=req.params.id;
   console.log("updating approved pre batch");
   
  const response=await db.query("UPDATE enrollment_data SET approval_status=$1 ,pre_batch_comment=$3 WHERE id=$2",
  [approved,updateId,pre_batch_comment]);
    res.redirect('/itc/read_approved');
    console.log(" record(s) updated");
  
}
}
