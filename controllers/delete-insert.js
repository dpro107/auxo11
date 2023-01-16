var db=require('../database');
module.exports={
deleteData:async(req,res)=>{
   
  const deleteId=req.params.id;
  const response= await db.query('DELETE  FROM enrollment_data where id=$1 ',[deleteId]);
    res.redirect('/crud/read');
    console.log( " record deleted");
  
 
}
}
