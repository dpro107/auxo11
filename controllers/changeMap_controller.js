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
    const role = "Counsellor";
    const role2 = "Team Lead";
    const counsellors = await db.query("SELECT * FROM counsellor where status = 'Active' order by name");
    const tl = await db.query("SELECT * FROM counsellor where role = 'TL' and status ='Active' order by name");
    const am = await db.query("SELECT * FROM counsellor where role = 'AM' and status ='Active' order by name");

    const mappings = await db.query("SELECT * from team_lead order by map_date desc, counsellor");
    
    res.render("change_mapping", {fetch: counsellors.rows, fetch2: tl.rows , fetch3: mappings.rows, fetch4: am.rows});
    // res.redirect('/grud/insert');
    console.log("Table has been fetched sucessfully ");
  },

  fetch2: async (req, res) => {
    // const editId = req.params.id;
    // const counsellors = await db.query(
    //   "SELECT * FROM counsellor where e_id=$1",
    //   [editId]
    // );
    const editId = req.params.id;
    const mapping = await db.query("SELECT * FROM team_lead where id = $1",[editId]);
    const tl = await db.query("SELECT * FROM counsellor where role = 'TL' and status ='Active' order by name");
    const am = await db.query("SELECT * FROM counsellor where role = 'AM' and status ='Active' order by name");
    const all_mapping = await db.query("SELECT * from team_lead order by map_date desc, counsellor");

    res.render("updatemapping", {
      fetch_data: mapping.rows[0],
      fetch_tl: tl.rows,
      fetch_am: am.rows,
      fetch3:all_mapping.rows });
    // res.redirect('/grud/insert');
  },

  createData: async (req, res) => {
    const tl = req.body.teamlead;
    const counsell = req.body.counselllor;
    const am = req.body.am;
    const employee_code = req.body.emp_id;
    const map = req.body.mapp;


    const hf = await db.query("select c_id from team_lead");
      let hy = hf.rows; 
      console.log(hy.length);
      let ry = 0;
      let i=0;
      if(hy.length>0) {
        do {
          console.log("Success");
          let hrb = hf.rows[i];
          console.log(hrb.c_id);
          
          if (hrb.c_id == employee_code){
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
          await db.query("INSERT into team_lead (c_id,counsellor,teamlead,am,lc_tl_am,map_date) VALUES ($1,$2,$3,$4,$5,CURRENT_DATE)",[employee_code,counsell,tl,am, map]);
          console.log(" record created");
          res.redirect("/maprud/insert");
        }
  },

  updateData: async (req, res) => {
    const emp_id = req.body.em_id;
    const couns = req.body.counsellor;
    const tl = req.body.tl;
    const am = req.body.ams;
    const start_date = req.body.start_d;
    const end_date = req.body.end_d;
    const map = req.body.mapp;



    console.log(" record created");
    const response = await db.query(
      "UPDATE team_lead SET teamlead= $2,am=$3, map_date = CURRENT_DATE, lc_tl_am = $4 where c_id = $1",
      [emp_id, tl, am, map]
    );


    if (start_date !="" && end_date!=""){
     console.log(start_date);
     
    console.log(end_date);
    await db.query(
      "UPDATE enrollment_data SET team_lead= $2, am_sales = $5 where counsellor = $1 and enrollment_date between $3 and $4",
      [couns, tl, start_date,end_date, am])



    }

    console.log(" record created");
    res.redirect("/maprud/insert");
  },
};
