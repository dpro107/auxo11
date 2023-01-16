const database = require("../database");
const db = require("../database");

// exports.listall = async(req, res) =>{
//      const programs  =await db.query('SELECT * FROM test');
//      res.render('insert_program' , {fetchData:programs , rows});
//     //  res.redirect('/grud/insert');
//      console.log("Table has been fetched sucessfully ");
// }

module.exports = {
  fetch1: async (req, res) => {
    const programs = await db.query("SELECT * FROM batch_details");
    const responses= await db.query("SELECT * FROM test");
    res.render("batch_create", { fetch: programs.rows,fetchData:responses.rows });
    // res.redirect('/grud/insert');
    console.log("Table has been fetched sucessfully ");
  },


  

  fetch2: async (req, res) => {
    const editId = req.params.batch_id;
    const programs = await db.query("SELECT * FROM batch_details where batch_id = $1", [editId]);
    const prg = await db.query("SELECT * FROM batch_details");
    res.render("batch_update", {
      fetch2: programs.rows[0],
      fetch_data: prg.rows,
    });
    // res.redirect('/grud/insert');
    console.log("Table has been fetched sucessfully ");
  },

  createData: async (req, res) => {
    const program_name = req.body.program_name;
    const batch_no = req.body.batch_no;
    const batch_start_date = req.body.batch_start_date;
    const batch_id = req.body.batch_id;
    // const dab=await db.query('SELECT * FROM batch_details');

    //     console.log(" record created");
    // res.redirect("/brud/insert");

  
        const hf = await db.query("select batch_id from batch_details");
        let hy = hf.rows; 
        console.log(hy.length);
        let ry = 0;
        let i=0;
        if(hy.length>0) {
          do {
            console.log("Success");
            let hrb = hf.rows[i];
            console.log(hrb.name);
            
            if (hrb.batch_id == batch_id){
              console.log(hf.rows[i]);
              ry = 1;
              break;  
            }
            i+=1;
          } while (i < hy.length);
        }
        console.log("hh");
        if(ry==1){
          console.log("hg");
           res.render("404");
        }
      
        else{
          
            console.log("zy");
            await db.query(
              "INSERT into batch_details (program_name,batch_no,batch_start_date,batch_id) VALUES ($1,$2,$3,$4)",
              [program_name,batch_no,batch_start_date,batch_id]);
            console.log(" record created");
            res.redirect("/brud/insert");
          }
  },

  updateData: async (req, res) => {
    const program_name = req.body.program_name;
    const batch_no = req.body.batch_no;
    const n_batch_start_date = req.body.n_batch_start_date;
    console.log("record created");
    const res1 = await db.query("UPDATE enrollment_data SET batch_date =$3 where program = $1 and batch_number =$2",[program_name,batch_no,n_batch_start_date]);

    const response = await db.query("UPDATE batch_details SET batch_start_date =$2 where program_name = $1 and batch_no =$3 ",[program_name,n_batch_start_date,batch_no]
    );

    console.log(" record created");
    res.redirect("/brud/update");
  },



  // updateData: async (req, res) => {
  //   const program_name = req.body.program_name;
  //   const batch_no = req.body.batch_no;
  //   const batch_start_date = req.batch_start_date;
  //   console.log(" record created");
  //   const response = await db.query(
  //     "UPDATE batch_details SET batch_no = $2, batch_start_date =$3 where program_name = $1",
  //     [program_name, batch_no,batch_start_date]
  //   );

  //   console.log(" record created");
  //   res.redirect("/brud/update");
  // },

  
}
