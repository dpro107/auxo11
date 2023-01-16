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
    const programs = await db.query("SELECT * FROM delivery_support");
    res.render("manager_insert", { fetch: programs.rows });
    // res.redirect('/grud/insert');
    console.log("Table has been fetched sucessfully ");
  },

  fetch2: async (req, res) => {
    const editId = req.params.id;
    const programs = await db.query("SELECT * FROM delivery_support where name=$1", [editId]);
    const prg = await db.query("SELECT * FROM delivery_support");
    res.render("manager_update", {
      fetch2: programs.rows[0],
      fetch_data: prg.rows,
    });
    // res.redirect('/grud/insert');
    console.log("Table has been fetched sucessfully ");
  },

  createData: async (req, res) => {
    const name = req.body.name;
    const date_of_joining = req.body.date_of_joining;
    const role  = req.body.role;
    const e_id = req.body.e_id;
    const status = req.body.status;
  
        const hf = await db.query("select e_id from delivery_support");
        let hy = hf.rows; 
        // console.log(hy.length);
        let ry = 0;
        let i=0;
        if(hy.length>0) {
          do {
            console.log("Success");
            let hrb = hf.rows[i];
            // console.log(hrb.name);
            
            if (hrb.e_id == e_id){
              // console.log(hf.rows[i]);
              ry = 1;
              break;  
            }
            i+=1;
          } while (i < hy.length);
        }
        console.log("hh");
        if(ry==1){
          // console.log("hg");
           res.render("404");
        }
      
        else{
          
            // console.log("zy");
            await db.query(
              "INSERT into delivery_support  (name,date_of_joining,role,e_id,status) VALUES ($1,$2,$3,$4,$5)",
              [name, date_of_joining,role,e_id,status]
            );
            // console.log(" record created");
            res.redirect("/mang/insert");
          }


  },

  updateData: async (req, res) => {
    const name = req.body.name;
    const date_of_joining = req.body.date_of_joining;
    const role  = req.body.role;
    const e_id = req.body.e_id;
    const status = req.body.status;

    console.log(" record created");
    const response = await db.query( "UPDATE delivery_support SET role = $2 , status = $3 where e_id = $1",
      [e_id,role,status]
    );

    console.log(" record created");
    res.redirect("/mang/insert");
  },
};
