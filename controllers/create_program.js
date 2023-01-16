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
    const programs = await db.query("SELECT * FROM test");
    res.render("insert_program", { fetch: programs.rows });
    // res.redirect('/grud/insert');
    console.log("Table has been fetched sucessfully ");
  },

  fetch2: async (req, res) => {
    const editId = req.params.id;
    const programs = await db.query("SELECT * FROM test where id=$1", [editId]);
    const prg = await db.query("SELECT * FROM test");
    res.render("update_program", {
      fetch2: programs.rows[0],
      fetch_data: prg.rows,
    });
    // res.redirect('/grud/insert');
    console.log("Table has been fetched sucessfully ");
  },

  createData: async (req, res) => {
    const name = req.body.name;
    const offer_price = req.body.offer_price;
    // console.log(" record created");

      const hf = await db.query("select name from test");
      let hy = hf.rows; 
      console.log(hy.length);
      let ry = 0;
      let i=0;
      if(hy.length>0) {
        do {
          console.log("Success");
          let hrb = hf.rows[i];
          console.log(hrb.name);
          
          if (hrb.name == name){
            console.log(hf.rows[i]);
            ry = 1;
            break;  
          }
          i+=1;
        } while (i < hy.length);
      }
      console.log("hh");
      if(ry==1){
        res.render("404");
        console.log("hg");
         
      }
    
      else{
        
          console.log("zy");
          await db.query(
            "INSERT into test  (name,offer_price) VALUES ($1,$2)",
            [name, offer_price]);
          console.log(" record created");
          res.redirect("/grud/insert");
        }
  },

  updateData: async (req, res) => {
    const select_name = req.body.program_name;
    const c_offer_price = req.body.c_offer_price;
    console.log(" record created");
    const response = await db.query(
      "UPDATE test SET offer_price = $2 where name = $1",
      [select_name, c_offer_price]
    );

    console.log(" record created");
    res.redirect("/grud/insert");
  },
};
