var db=require('../database');
module.exports={
  readData:function(callback){
    var sql='SELECT * FROM enrollment_data';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    return callback(data);
    });  
  }
 
}