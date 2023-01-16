const db=require('../database');

    

exports.listall=async(req,res)=>{
    var currentdate = new Date();
   var datetime =  (currentdate.getDate()-1) + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() ;
   
     const today_sales= datetime;
    const responses= await db.query('SELECT * FROM enrollment_data where today_sales=$1',[today_sales]);
    res.render('link_fin_tab', {fetchData:responses.rows});

    
}

