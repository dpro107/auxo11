const database = require("../database");
const db = require("../database");

module.exports = {
  fetch1: async (req, res) => { 
    const responses= await db.query("SELECT * FROM test");
    res.render("deliveryprogram_insert", {fetchData:responses.rows });
    // res.redirect('/grud/insert');
    console.log("Table has been fetched sucessfully ");
  },


  

  fetch2: async (req, res) => {
    const editId = req.params.name;
    const programs = await db.query("SELECT * FROM enrollment_data where program = $1", [editId]);
    const prg = await db.query("SELECT distinct batch_number, program, batch_date, delivery_lrm, delivery_ops_analyst FROM enrollment_data where program = $1 order by batch_number ASC", [editId]);
    const lrm = await db.query("SELECT * from delivery_support where role ='LRM'");
    const ops = await db.query("SELECT * from delivery_support where role = 'OPS_ANALYST'");

    res.render("deliveryprogram_update", {
      fetch2: programs.rows[0],
      fetchData: prg.rows,
      fetchlrm: lrm.rows,
      fetchops: ops.rows,
    });
    // res.redirect('/grud/insert');
    console.log("Table has been fetched sucessfully ");
  },

  createData: async (req, res) => {
    const id = req.params.name
    const program_name = req.body.program_name;
    const batch_no = req.body.batch_no  ;
    const lrm = req.body.lrm;
    const ops = req.body.ops;
    console.log(" record created");
    const response = await db.query(
      "update enrollment_data set delivery_lrm=$1,delivery_ops_analyst=$2 where program=$3 and batch_number =$4",
      [lrm,ops,program_name,batch_no]
    );
    console.log(" record created");
    res.redirect(id);

  },

}
