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
    const programs = await db.query("SELECT * FROM additional_benefits");
    res.render("insert_benefit", { fetch: programs.rows });
    // res.redirect('/grud/insert');
    console.log("Table has been fetched sucessfully ");
  },

  fetch2: async (req, res) => {
    const editId = req.params.item;
    const programs = await db.query(
      "SELECT * FROM additional_benefits where item=$1",
      [editId]
    );
    const prg = await db.query("SELECT * FROM additional_benefits");
    res.render("update_benefit", {
      fetch2: programs.rows[0],
      fetch_data: prg.rows,
    });
    // res.redirect('/grud/insert');
    console.log("Table has been fetched sucessfully ");
  },

  crudForm: async (req, res) => {
    res.render("insert_benefit");
  },


  
deleteData:async(req,res)=>{
  const item =req.body.item;
  
   console.log(" record created");
   const response=await db.query('DELETE FROM additional_benefits where item = $1',[item]);
 
 
   console.log(" record created");
   res.redirect('/ben/insert');
   },





  createData: async (req, res) => {
    const item = req.body.item;
    const price = req.body.price;
    console.log(" record created");
    const response = await db.query(
      "INSERT into additional_benefits(item,price) VALUES ($1,$2)",
      [item, price]
    );

    console.log(" record created");
    res.redirect("/ben/insert");
  },

  updateData: async (req, res) => {
    const select_name = req.body.item;
    const c_offer_price = req.body.price;
    console.log(" record created");
    const response = await db.query(
      "UPDATE additional_benefits SET price = $2 where item = $1",
      [select_name, c_offer_price]
    );

    console.log(" record created");
    res.redirect("/ben/insert");
  },

};
