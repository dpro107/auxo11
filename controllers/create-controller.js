//var createModel=require('../models/create-model');
const database = require('../database');
const db=require('../database');

module.exports={
crudForm:async(req, res)=> {
    const responses= await db.query('SELECT * FROM test');
    const r= await db.query('SELECT distinct batch_id, batch_no, batch_start_date,program_name FROM batch_details order by batch_id ASC');
    const resp=await db.query('SELECT * FROM enrollment_data');
    const cound=await db.query('select * from team_lead order by counsellor ASC');
    const scholar=await db.query('SELECT * FROM scholarship');
    const lrr=await db.query('SELECT * FROM loan_rejected_reason');
    const fd=await db.query('SELECT * FROM final_disposition');
    const cs=await db.query('SELECT * FROM current_status');
    const rr=await db.query('SELECT * FROM refund_reason');
    const lpp=await db.query('SELECT * FROM loan_partner');
    const dr=await db.query('SELECT * FROM dropout_reason');
    const sab=await db.query('SELECT * FROM scholarship_approved_by');
    const dab=await db.query('SELECT * FROM additional_benefits');
    const tl = await db.query('SELECT distinct teamlead FROM team_lead');







    res.render('crud-form', {fetchData:responses.rows,batchData:r.rows,leng:resp.rows.length,data_c:cound.rows,data_s:scholar.rows,lrr_s:lrr.rows,fd_s:fd.rows,cs_s:cs.rows,rr_s:rr.rows,dr_s:dr.rows,sab_s:sab.rows,lpp_s:lpp.rows, benefit:dab.rows , tl_s:tl.rows});
    //res.render('crud-form');
},



createData:async(req,res)=>{
  const additional_benefits = req.body.additional_benefits;
  const team_lead = req.body.team_lead;
  const am = req.body.asst_mgr;

  const customer_id=req.body.customer_id; 
  const  email_address=req.body.email_address; 
  const customer_name =req.body.customer_name; 
 const  phone_number = req.body.phone;
 const counsellor =req.body.counsellor;
 if(req.body.enrollment_date ==" " | !req.body.enrollment_date)
 enrollment_date = null;
else
 enrollment_date=req.body.enrollment_date; const program =req.body.program;
 const batchid = req.body.batchidd;
 const offer_price=req.body.offer_price;
 const price_without_tax =req.body.price_after;
 const discount =req.body.discount;
 const scholarship = req.body.scholarship;
 
 const price_with_tax = req.body.price_with_tax;
 var date_of_disbursal = null;
 if(req.body.date_of_distribution ==" " | !req.body.date_of_distribution)
  date_of_disbursal = null;
 else
  date_of_disbursal=req.body.date_of_distribution;

 const batch_number=req.body.batch_number;
 const scholarship_per=req.body.scholarship_perc;
  const payment_mode = req.body.mode;
 const loan_partner = req.body.loan;
 const current_status = req.body.status;
 const batch_type=req.body.batch_type;
 const final_disposition = req.body.Disposition; 
 const approved_installment = req.body.approved_installment;
 
 const remarks = req.body.Remarks;
 const loan_rejected = req.body.loan_rejected;
 const loan_rejected_reason = req.body.loan_rejected_reason;
 const refund = req.body.Refund_Raised;
 const refund_reason = req.body.Refund_Reason;
 const refund_remarks=req.body.refund_remarks;
 var refund_date=null;
   if(req.body.refund_date ==" " | !req.body.refund_date)
    refund_date = null;
   else
    refund_date=req.body.refund_date;

 const dropout = req.body.Dropout;
 const dropout_reason= req.body.Dropout_reason;
 var dropout_date=null;
 if(req.body.Dropout_Date ==" " | !req.body.Dropout_Date)
   dropout_date = null;
 else
   dropout_date=req.body.Dropout_Date; const late_start=req.body.late_start;
 const late_start_month=req.body.late_start_month;
 const batch_deferred = req.body.Deferred;
 const deferred_to_next_batch = req.body.deferred_next_batch;
 var deferred_date=null;
 if(req.body.Deferred_Date ==" " | !req.body.Deferred_Date)
   deferred_date = null;
 else
   deferred_date=req.body.Deferred_Date;    
   const approved_by = req.body.approved_by;
const upcoming_batch = req.body.upcoming_batch;
const upcoming_batch_month=req.body.upcoming_batch_month;
var batch_date=null;
  if(req.body.batch_date ==" " | !req.body.batch_date)
   batch_date = null;
  else
   batch_date=req.body.batch_date;
  
  var bootcamp_date=null;
  if(req.body.bootcamp_date ==" " | !req.body.bootcamp_date)
    bootcamp_date = null; 
  else
    bootcamp_date=req.body.bootcamp_date;

var currentdate = new Date();
var datetime =  currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() 
const today_sales= datetime;
const todays_new=datetime;
   


  console.log(" record created");
  const response=await db.query("INSERT into enrollment_data  (customer_id,email_address, customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,scholarship_per,payment_mode,loan_partner,current_status,batch_type,final_disposition,approved_installment,remarks,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,batch_deferred,deferred_to_next_batch,deferred_date,approved_by,upcoming_batch,upcoming_batch_month,batch_date,bootcamp_date,date_of_disbursal,today_sales,todays_new, additional_benefits , team_lead, batch_id, am_sales) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47)",
  [customer_id,email_address,customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,scholarship_per,payment_mode,loan_partner,current_status,batch_type,final_disposition,approved_installment,remarks,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,batch_deferred,deferred_to_next_batch,deferred_date,approved_by,upcoming_batch,upcoming_batch_month,batch_date,bootcamp_date,date_of_disbursal,today_sales,todays_new, additional_benefits,team_lead,batchid,am]);



  var current_d = Date.now();
  const user = req.user;
  var user_name = user.name;
  var user_email = user.email;

  const rex = await db.query("INSERT into logs_users  (customer_id,email_address, customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,scholarship_per,payment_mode,loan_partner,current_status,batch_type,final_disposition,approved_installment,remarks,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,batch_deferred,deferred_to_next_batch,deferred_date,approved_by,upcoming_batch,upcoming_batch_month,batch_date,bootcamp_date,date_of_disbursal,today_sales,todays_new, additional_benefits , team_lead, batch_id, am_sales,department, username,edit_timestamp) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50)",
  [customer_id,email_address,customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,scholarship_per,payment_mode,loan_partner,current_status,batch_type,final_disposition,approved_installment,remarks,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,batch_deferred,deferred_to_next_batch,deferred_date,approved_by,upcoming_batch,upcoming_batch_month,batch_date,bootcamp_date,date_of_disbursal,today_sales,todays_new, additional_benefits,team_lead,batchid,am,"Sales-New",user_email,current_d]);

  
    //const {rows}=await db.query("INSERT INTO enrollment_data (customer_id) VALUES ($1)",[customer_id]);
  
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
    if(ry == 0 && batch_deferred == "Yes"){
      console.log("zy");
      await db.query("INSERT into deferred_learners  (customer_id,email_address, customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,scholarship_per,payment_mode,loan_partner,current_status,batch_type,final_disposition,approved_installment,remarks,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,batch_deferred,deferred_to_next_batch,deferred_date,approved_by,upcoming_batch,upcoming_batch_month,batch_date,bootcamp_date,date_of_disbursal,today_sales,todays_new, additional_benefits , team_lead, batch_id,in_batch) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47)",
      [customer_id,email_address,customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,scholarship_per,payment_mode,loan_partner,current_status,batch_type,final_disposition,approved_installment,remarks,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,batch_deferred,deferred_to_next_batch,deferred_date,approved_by,upcoming_batch,upcoming_batch_month,batch_date,bootcamp_date,date_of_disbursal,today_sales,todays_new, additional_benefits,team_lead,batchid,"No"]);
    }
    if(Number(approved_installment) >=2 ){
      const install = await db.query("select customer_id from installement_table");
      let ia = install.rows; 
      console.log(ia.length);
      let iy = 0;
      let j=0;
      if(ia.length>0) {
        do {
          console.log("Success");
          let irb = install.rows[j];
          console.log(irb.customer_id);
          
          if (irb.customer_id == customer_id){
            console.log(install.rows[j]);
            iy = 1;
            break;  
          }
          j+=1;
        } while (j < ia.length);
      }
      console.log("ii");
      if(iy == 0){
        console.log(Number(approved_installment));
        await db.query("INSERT into installement_table  (customer_id,email_address, customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,approved_installment,team_lead, batch_id,batch_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)",
        [customer_id,email_address,customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,approved_installment,team_lead,batchid,batch_date]);
      }
    }


  
  
  
  
  console.log(" record created");
  res.redirect('/crud/form');}

  
  
}