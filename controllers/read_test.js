const db=require('../database');
const db1=require('../database_lsq');
    

exports.listall=async(req,res)=>{
    const responses= await db.query('SELECT * FROM test');
    res.render('insert_program', {fetchData:responses.rows});
    
}

    

exports.listall1=async(req,res)=>{
    const responses= await db1.query('SELECT * FROM "vassist-prod".payment_details');
    res.render('test_read', {fetchData:responses.rows});
    
}