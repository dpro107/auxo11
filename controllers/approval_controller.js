const db=require('../database');

    

exports.listall=async(req,res)=>{
    var Pending='Pending';
    const responses= await db.query('SELECT * FROM enrollment_data WHERE approval_status=$1',[Pending]);
    res.render('approved-table', {fetchData:responses.rows});
    
}

