var db=require('../database');
const { editData } = require('./update-controller');
module.exports={
editData:async(req,res)=>{
    const editId=req.params.id;
    const response= await db.query('SELECT * FROM enrollment_data where id=$1 ',[editId]);
    const cs=await db.query('SELECT * FROM current_status');
    const fd=await db.query('SELECT * FROM delivery_request_mode');
    const dd=await db.query('SELECT * FROM delivery_final_status');
    const zz = await db.query('SELECT * FROM test')

    var ir = response.rows[0];


    var delivery_date_of_first_request = ir.delivery_date_of_first_request;
  
    var delivery_date_of_acceptance = ir.delivery_date_of_acceptance;
  const delivery_request_made=ir.delivery_request_made

  const delivery_final_status=ir.delivery_final_status

  const customer_id = ir.customer_id
  const customer_name = ir.customer_name
  const phone_number = ir.phone
  const email_address = ir.email_address
  var enrollment_date = ir.enrollment_date;
  
  const program = ir.program
  const batch_number = ir.batch_number
  const price_without_tax = Number(ir.price_after)
  const total = ir.total

  const delivery_reason=ir.delivery_reason
  const delivery_expense=ir.delivery_expense
  const del_comment_over_gunjan=ir.del_comment_over_gunjan


  const delivery_detailed_notes=ir.delivery_detailed_notes
  const delivery_deferred_to_month=ir.delivery_deferred_to_month
  const post_batch_approval=ir.post_batch_approval
  const assignment_submitted=ir.assignment_submitted;
  const assignment_assigned=ir.assignment_assigned;
  const pm_name=ir.pm_name;
  const welcome_kit_sent=ir.welcome_kit_sent;
  const classes_attended=ir.classes_attended;
const total_live_classes_attended=ir.total_live_classes_attended;
const total_career_session_hours=ir.total_career_session_hours;

const deferred_program = ir.deferred_program;
  const deferred_batch_no = ir.deferred_batch_no;
  var currentdate = new Date();
  var datetime =  currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() ;
  
    const today_delivery= datetime;

    var current_d = Date.now();
    const user = req.user;
    var user_name = user.name;
    var user_email = user.email;
   


  await db.query("INSERT INTO logs_users (delivery_date_of_first_request,id,delivery_date_of_acceptance,delivery_request_made,delivery_final_status,delivery_reason,delivery_detailed_notes,delivery_deferred_to_month,today_delivery,post_batch_approval,delivery_expense,del_comment_over_gunjan,assignment_submitted,assignment_assigned,pm_name,welcome_kit_sent,classes_attended,total_live_classes_attended,total_career_session_hours, deferred_program, deferred_batch_no,customer_id,customer_name,phone_number,email_address,enrollment_date,program,batch_number,price_without_tax,total,department, username,edit_timestamp) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33)",[delivery_date_of_first_request,editId,delivery_date_of_acceptance,delivery_request_made,delivery_final_status,delivery_reason,delivery_detailed_notes,delivery_deferred_to_month,today_delivery,post_batch_approval,delivery_expense,del_comment_over_gunjan,assignment_submitted,assignment_assigned,pm_name,welcome_kit_sent,classes_attended,total_live_classes_attended,total_career_session_hours, deferred_program, deferred_batch_no,customer_id,customer_name,phone_number,email_address,enrollment_date,program,batch_number,price_without_tax,total,"Delivery",user_email,current_d]);











      res.render('delivery', { editData:response.rows[0],cs_s:cs.rows,fd_s:fd.rows,dd_s:dd.rows, fetchData:zz.rows});
      console.log(" record fetched");
    
   
},
updateData:async(req,res)=>{
   
  // full_name: req.body.full_name,  
   //city : req.body.city, 
   //C : req.body.country, 
   var delivery_date_of_first_request = null;
   if(req.body.date_of_distribution ==" " | !req.body.delivery_date_of_first_request)
    delivery_date_of_first_request = null;
   else
    delivery_date_of_first_request=req.body.delivery_date_of_first_request;
  
    var delivery_date_of_acceptance = null;
    if(req.body.delivery_date_of_acceptance ==" " | !req.body.delivery_date_of_acceptance)
     delivery_date_of_acceptance = null;
    else
     delivery_date_of_acceptance=req.body.delivery_date_of_acceptance;
  const delivery_request_made=req.body.delivery_request_made

  const delivery_final_status=req.body.delivery_final_status

  const customer_id = req.body.customer_id
  const customer_name = req.body.customer_name
  const phone_number = req.body.phone
  const email_address = req.body.email_address
  var enrollment_date = null;
    if(req.body.enrollment_date ==" " | !req.body.enrollment_date)
      enrollment_date = null;
    else
      enrollment_date=req.body.enrollment_date;
  
  const program = req.body.program
  const batch_number = req.body.batch_number
  const price_without_tax = Number(req.body.price_after)
  const total = Number(req.body.total)

  const delivery_reason=req.body.delivery_reason
  const delivery_expense=req.body.delivery_expense
  const del_comment_over_gunjan=req.body.del_comment_over_gunjan


  const delivery_detailed_notes=req.body.delivery_detailed_notes
  const delivery_deferred_to_month=req.body.delivery_deferred_to_month
  const post_batch_approval=req.body.post_batch_approval
  const assignment_submitted=req.body.assignment_submitted;
  const assignment_assigned=req.body.assignment_assigned;
  const pm_name=req.body.pm_name;
  const welcome_kit_sent=req.body.welcome_kit_sent;
  const classes_attended=req.body.classes_attended;
const total_live_classes_attended=req.body.total_live_classes_attended;
const total_career_session_hours=req.body.total_career_session_hours;

const deferred_program = req.body.deferred_program;
  const deferred_batch_no = req.body.deferred_batch_no;
   
   var currentdate = new Date();
var datetime =  currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() ;

  const today_delivery= datetime;




  
const updateId=req.params.id;
console.log("start updating")


  const response=await db.query("UPDATE enrollment_data SET delivery_date_of_first_request=$1,delivery_date_of_acceptance=$3,delivery_request_made=$4,delivery_final_status=$5,delivery_reason=$6,delivery_detailed_notes=$7,delivery_deferred_to_month=$8,today_delivery=$9,post_batch_approval=$10,delivery_expense=$11,del_comment_over_gunjan=$12,assignment_submitted=$13,assignment_assigned=$14,pm_name=$15,welcome_kit_sent=$16,classes_attended=$17,total_live_classes_attended=$18,total_career_session_hours=$19, deferred_program=$20, deferred_batch_no=$21 WHERE id=$2",[delivery_date_of_first_request,updateId,delivery_date_of_acceptance,delivery_request_made,delivery_final_status,delivery_reason,delivery_detailed_notes,delivery_deferred_to_month,today_delivery,post_batch_approval,delivery_expense,del_comment_over_gunjan,assignment_submitted,assignment_assigned,pm_name,welcome_kit_sent,classes_attended,total_live_classes_attended,total_career_session_hours, deferred_program, deferred_batch_no]);



  const hf = await db.query("select customer_id from deferred_learners");
  let hy = hf.rows; 
  console.log(hy.length);
  let ry = 0;
  let i=0;
  if(hy.length>0) {
    do {
      console.log("Success");
      let hrb = hf.rows[i];
      console.log(hrb.customer_id);
      
      if (hrb.customer_id == customer_id){
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
    if (delivery_final_status == "Deferred" || delivery_final_status == "Deferrement Without Fees" ){
      console.log("hz");
      await db.query("UPDATE deferred_learners SET delivery_final_status=$1,delivery_date_of_acceptance=$2,deferred_program=$3,deferred_batch_no=$4,delivery_deferred_to_month=$5 WHERE customer_id=$6",[delivery_final_status,delivery_date_of_acceptance,deferred_program, deferred_batch_no,delivery_deferred_to_month,customer_id]);
    }
     
  }

  else{
    if(delivery_final_status == "Deferred" || delivery_final_status == "Deferrement Without Fees" ){
      console.log("zy");
      await db.query("INSERT INTO deferred_learners (delivery_final_status,delivery_date_of_acceptance,deferred_program,deferred_batch_no,delivery_deferred_to_month,customer_id,customer_name,phone_number,email_address,enrollment_date,program,batch_number,price_without_tax,total) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)",[delivery_final_status,delivery_date_of_acceptance,deferred_program, deferred_batch_no,delivery_deferred_to_month,customer_id,customer_name,phone_number,email_address,enrollment_date,program,batch_number,price_without_tax,total]);
    }
  }
  
  



  res.redirect('/wrud/read_deli');
    console.log(" record(s) updated");
   
}
}
