const db=require('../database');

    

exports.listall=async(req,res)=>{
    const responses= await db.query('SELECT * FROM enrollment_data');
    res.render('crud-table', {fetchData:responses.rows});
    
}

