const { response } = require('express')
const { Pool, Client } = require('pg');
const readModel = require('./models/read-model');
const pool = new Pool({
  user: 'devesh_db',
  host: 'hvdataanalysis.c0t6c92ozrcn.ap-south-1.rds.amazonaws.com',
  database: 'hero_data_devesh',
  password: 'devesh@db123',
  port: 5432,
})

//pool.on('connect',()=>{
//  console.log('database connected successfully');
//});
pool.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});




const client = new Client({
    user: 'devesh_db',
    host: 'hvdataanalysis.c0t6c92ozrcn.ap-south-1.rds.amazonaws.com',
    database: 'hero_data_devesh',
    password: 'devesh@db123',
    port: 5432,
})

client.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports={
  query:(text,params)=> pool.query(text,params),
}

