const db=require('../database_lsq');

    

exports.listall=async(req,res)=>{
    const responses= await db.query('SELECT * FROM "vassist-prod".payment_details');
    res.render('test_read', {fetchData:responses.rows});
    
}