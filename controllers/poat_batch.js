const db=require('../database');

    

exports.listall=async(req,res)=>{
    var Pending='Pending';
    const responses= await db.query('SELECT * FROM enrollment_data WHERE post_batch_approval=$1',[Pending]);
    res.render('post_batch-table', {fetchData:responses.rows});
    
}

