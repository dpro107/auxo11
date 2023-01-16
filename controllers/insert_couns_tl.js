const database = require('../database');
const db=require('../database');



// exports.listall = async(req, res) =>{
//      const programs  =await db.query('SELECT * FROM test');
//      res.render('insert_program' , {fetchData:programs , rows});
//     //  res.redirect('/grud/insert');
//      console.log("Table has been fetched sucessfully ");
// }



module.exports={

    fetch1: async(req,res)=>{
        const counsellors  =await db.query('SELECT id, name, date_of_joining, status, role, e_id FROM counsellor order by name');
        res.render('insert_couns_tl' , {fetch:counsellors.rows});
        // res.redirect('/grud/insert');
        console.log("Table has been fetched sucessfully ");
    },

    fetch2: async(req,res)=>{
        const editId=req.params.id;
        const counsellors  =await db.query('SELECT * FROM counsellor where e_id=$1',[editId]);
        const couns = await db.query('SELECT * FROM counsellor');
        res.render('update_couns_tl' , {fetch2:counsellors.rows[0],fetch_data:couns.rows});
        // res.redirect('/grud/insert');
        console.log("Table has been fetched sucessfully ");
    },


createData:async(req,res)=>{
 const name =req.body.name;
 const role =req.body.role;
 const doj=req.body.doj;
 const eid = req.body.eid;
 const status = req.body.status;
  console.log(" record created");



      const hf = await db.query("select e_id from counsellor");
      let hy = hf.rows; 
    //   console.log(hy.length);
      let ry = 0;
      let i=0;
      if(hy.length>0) {
        do {
        //   console.log("Success");
          let hrb = hf.rows[i];
          console.log(hrb.e_id);
          
          if (hrb.e_id == eid){
            // console.log(hf.rows[i]);
            ry = 1;
            break;  
          }
          i+=1;
        } while (i < hy.length);
      }
    //   console.log("hh");
      if(ry==1){
        // console.log("hg");
         res.render("404");
      }
    
      else{
        
          console.log("zy");
          await db.query("INSERT into counsellor (name,date_of_joining,status,role,e_id) VALUES ($1,$2,$3,$4,$5)", [name,doj,status,role,eid]);
          console.log(" record created");
          res.redirect("/mrud/insert");
        }

},
   






updateData:async(req,res)=>{
    const emp_id =req.body.eid;
    const n_role = req.body.role;
    const n_status = req.body.status;
     console.log(" record created");
     const response=await db.query("UPDATE counsellor SET role = $2,status =$3 where e_id = $1",
     [emp_id,n_role,n_status]);
     

  console.log(" record created");
  res.redirect('/mrud/insert');
  }}