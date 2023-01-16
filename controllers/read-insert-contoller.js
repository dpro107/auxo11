const db=require('../database');

    

exports.listall=async(req,res)=>{
    const responses= await db.query('SELECT * FROM test');
    res.render('insert-table', {fetchData:responses.rows});
    
}

