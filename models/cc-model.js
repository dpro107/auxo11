var db=require('../database');

module.exports={ 
  createData:function(inputData,callback){
    
    
    var sql = 'Update user SET country ? where email_address ? '; 
    db.query(sql, [inputData.country,inputData.email_address],function (err, data) {
    if (err) throw err;
      return callback(data);
    });
  }
}