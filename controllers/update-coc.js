var db=require('../database')
module.exports={
editData:async(req,res)=>{
    const editId=req.params.id;
    const response= await db.query('SELECT * FROM enrollment_data where id=$1 ',[editId]);
    
    const cs=await db.query('SELECT * FROM current_status');
    const lpp=await db.query('SELECT * FROM loan_partner');
    const cus = response.rows[0].customer_id;
    const rep = await db.query('SELECT * FROM installement_table where customer_id=$1',[cus]);

    var ir = response.rows[0];
    var ip = rep.rows.length;
    var iid = rep.rows[0];
  

  const additional_benefits = ir.additional_benefits;
  const customer_id=ir.customer_id; 
  const  email_address=ir.email_address; 
  const customer_name =ir.customer_name; 
  const  phone_number = ir.phone_number;
  const counsellor =ir.counsellor;
  const team_lead = ir.team_lead;
  const am = ir.am_sales;
  const enrollment_date=ir.enrollment_date;
  const program =ir.program;
  const batchid = ir.batch_id;
  const offer_price=ir.offer_price;
  const price_without_tax =ir.price_without_tax;
  const discount =ir.discount;
  const scholarship = ir.scholarship;
  const date_of_disbursal=ir.date_of_disbursal;
  const running_batch_start_date=ir.batch_date;
  const price_with_tax = ir.price_with_tax;
  const batch_number=ir.batch_number;
  const scholarship_per=ir.scholarship_perc;
  const payment_mode = ir.payment_mode;
  const loan_partner = ir.loan_partner;
  const current_status = ir.current_status;
  const batch_type=ir.batch_type;
  const final_disposition = ir.final_disposition; 
  const approved_installment = ir.approved_installment; 
  const remarks = ir.remarks;
  const loan_rejected = ir.loan_rejected;
  const loan_rejected_reason = ir.loan_rejected_reason;
  const refund = ir.refund;
  const refund_reason = ir.refund_reason;
  const refund_remarks=ir.refund_remarks;
  var refund_date = ir.refund_date;
  const dropout = ir.dropout;
  const dropout_reason= ir.dropout_reason;
  var dropout_date=ir.dropout_date;
  const late_start=ir.late_start;
  const late_start_month=ir.late_start_month;
  const batch_deferred = ir.batch_deferred;
  const deferred_to_next_batch = ir.deferred_to_next_batch;
  var deferred_date=ir.deferred_date;    
  const approved_by = ir.approved_by;
  const upcoming_batch = ir.upcoming_batch;
  const upcoming_batch_month=ir.upcoming_batch_month;
  var batch_date=ir.batch_date;
  var bootcamp_date=ir.bootcamp_date;
  const due=ir.due;
  const loan_payment= ir.loan_payment
  const total=ir.total
  const total_without_tax=ir.total_without_tax
  const due_notdue=ir.due_notdue
  const min_50_received=ir.min_50_received
  const subvention=ir.subvention
  const self_payment=ir.self_payment
  const remaining=ir.remaining
  const approval_status=ir.approval_status;
  const sales_pre_batch_comment=ir.sales_pre_batch_comment;
  const today_sales= ir.today_sales;
  const loan_payment_transaction_ref_no = ir.loan_payment_transaction_ref_no
  const installment_paid = ir.installment_paid
  const installment_pending = ir.installment_pending
  const refund_processed = ir.refund_processed
  const refund_amount = ir.refund_amount
  const refund_process_date = ir.refund_process_date
  const deferemment_fees = ir.deferemment_fees
  const loan_foreclosure_amount = ir.loan_foreclosure_amount
  const deferrement_finance_approved = ir.deferrement_finance_approved
  const new_self_payment = ir.new_self_payment
  const booking_amount = ir.booking_amount
  
  var installment_1 = null;
  var installment_2 = null;
  var installment_3 = null;
  var installment_4 = null;
  var installment_5 = null;
  var installment_6 = null;
  var installment_1_date = null;
  var installment_2_date = null;
  var installment_3_date = null;
  var installment_4_date = null;
  var installment_5_date = null;
  var installment_6_date = null;
  
  
  if(ip>0){  
     installment_1 = iid.installment_1; 
     installment_2 = iid.installment_2; 
     installment_3 = iid.installment_3; 
     installment_4 = iid.installment_4; 
     installment_5 = iid.installment_5; 
     installment_6 = iid.installment_6; 
     installment_1_date = iid.installment_1_date;
     installment_2_date = iid.installment_2_date;
     installment_3_date = iid.installment_3_date;
     installment_4_date = iid.installment_4_date;
     installment_5_date = iid.installment_5_date;
     installment_6_date = iid.installment_6_date;
  }  
  var current_d = Date.now();
  const user = req.user;
  var user_name = user.name;
  var user_email = user.email;
    



    await db.query("Insert into logs_users (customer_id,id,email_address, customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,scholarship_per,payment_mode,loan_partner,current_status,batch_type,final_disposition,approved_installment,remarks,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,batch_deferred,deferred_to_next_batch,deferred_date,approved_by,upcoming_batch,upcoming_batch_month,batch_date,bootcamp_date,date_of_disbursal,due,loan_payment,total,total_without_tax,due_notdue,min_50_received,subvention,self_payment,remaining,today_sales,approval_status,sales_pre_batch_comment,running_batch_start_date, additional_benefits , team_lead, batch_id , am_sales, department, username,edit_timestamp,loan_payment_transaction_ref_no,installment_paid,installment_pending, refund_processed,refund_amount,refund_process_date,deferemment_fees,loan_foreclosure_amount,deferrement_finance_approved,new_self_payment,booking_amount,installment_1,installment_2,installment_3,installment_4,installment_5,installment_6,installment_1_date,installment_2_date,installment_3_date,installment_4_date,installment_5_date,installment_6_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58,$59,$60,$61,$62,$63,$64,$65,$66,$67,$68,$69,$70,$71,$72,$73,$74,$75,$76,$77,$78,$79,$80,$81,$82,$83,$84,$85)",
  [customer_id,editId,email_address,customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,scholarship_per,payment_mode,loan_partner,current_status,batch_type,final_disposition,approved_installment,remarks,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,batch_deferred,deferred_to_next_batch,deferred_date,approved_by,upcoming_batch,upcoming_batch_month,batch_date,bootcamp_date,date_of_disbursal,due,loan_payment,total,total_without_tax,due_notdue,min_50_received,subvention,self_payment,remaining,today_sales,approval_status,sales_pre_batch_comment,running_batch_start_date, additional_benefits , team_lead, batchid, am,"Finance",user_email,current_d,loan_payment_transaction_ref_no,installment_paid,installment_pending, refund_processed,refund_amount,refund_process_date,deferemment_fees,loan_foreclosure_amount,deferrement_finance_approved,new_self_payment,booking_amount,installment_1,installment_2,installment_3,installment_4,installment_5,installment_6,installment_1_date,installment_2_date,installment_3_date,installment_4_date,installment_5_date,installment_6_date]);
  





      res.render('cc', { editData:response.rows[0],cs_s:cs.rows,lpp_s:lpp.rows, ipData:rep.rows[0]});
      console.log(" record fetched");
    
   
},
updateData:async(req,res)=>{
   
  // full_name: req.body.full_name,  
   //city : req.body.city, 
   //C : req.body.country,
   const customer_id = req.body.customer_id 
   const loan_payment= req.body.loan_payment
   const total=req.body.total
   const total_without_tax=req.body.total_without_tax
   const loan_partner = req.body.loan;

   const approved_installment= req.body.approved_installment;
   const subvention=req.body.subvention
   const self_payment=req.body.self_payment
   const remaining=req.body.remaining
   const loan_payment_transaction_ref_no=req.body.loan_payment_transaction_ref_no
   const installment_paid=req.body.installment_paid
   const installment_pending=req.body.installment_pending
   const due_notdue=req.body.due
   const refund_processed=req.body.refund_processed
   const refund_amount=req.body.refund_amount
   var refund_date=null;
   if(req.body.refund_date ==" " | !req.body.refund_date)
    refund_date = null;
   else
    refund_date=req.body.refund_date;
   const min_50_received=req.body.min_50_received
   const running_batch_start_date=req.body.running_batch_start_date
   const due=req.body.due_per;
   const dropout = req.body.Dropout;
   const special_case=req.body.special_case;
   const late_start=req.body.late_s;
   const batch_deferred = req.body.Deferred;
   const loan_rejected = req.body.loan_rejected;
   var date_of_disbursal = null;
   if(req.body.date_of_distribution ==" " | !req.body.date_of_distribution)
    date_of_disbursal = null;
   else
    date_of_disbursal=req.body.date_of_distribution;

   const current_status = req.body.status;
   const deferemment_fees= req.body.deferemment_fees
   const loan_foreclosure_amount=req.body.loan_foreclosure_amount
   const deferrement_finance_approved=req.body.deferrement_finance_approved
   const new_self_payment=req.body.new_self_payment;
   const booking_amount=req.body.booking_amount;
   const installment_1 = Number(req.body.installment_1);
   var installment_1_date = null;
   if(req.body.installmentt_1_date ==" " | !req.body.installmentt_1_date)
   installment_1_date = null;
   else
   installment_1_date=req.body.installmentt_1_date;
   const installment_2 = Number(req.body.installment_2)
   var installment_2_date = null;
   if(req.body.installmentt_2_date ==" " | !req.body.installmentt_2_date)
   installment_2_date = null;
   else
   installment_2_date=req.body.installmentt_2_date;
   
   const installment_3 = Number(req.body.installment_3)
   var installment_3_date = null;
   if(req.body.installmentt_3_date ==" " | !req.body.installmentt_3_date)
   installment_3_date = null;
   else
   installment_3_date=req.body.installmentt_3_date;



   const installment_4 = Number(req.body.installment_4)
   var installment_4_date = null;
   if(req.body.installmentt_4_date ==" " | !req.body.installmentt_4_date)
   installment_4_date = null;
   else
   installment_4_date=req.body.installmentt_4_date;

   const installment_5 =Number( req.body.installment_5)
   var installment_5_date = null;
   if(req.body.installmentt_5_date ==" " | !req.body.installmentt_5_date)
   installment_5_date = null;
   else
   installment_5_date=req.body.installmentt_5_date;

   const installment_6 = Number(req.body.installment_6)
   var installment_6_date = null;
   if(req.body.installmentt_6_date ==" " | !req.body.installmentt_6_date)
   installment_6_date = null;
   else
   installment_6_date=req.body.installmentt_6_date;
   
   












   var currentdate = new Date();
   var datetime =  currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() ;
   
  const today_finance= datetime;
   
  
const updateId=req.params.id;
console.log("start updating")


  const response=await db.query("UPDATE enrollment_data SET refund_amount=$1,loan_payment=$3,total=$4,total_without_tax=$5,subvention=$6,self_payment=$7,remaining=$8, loan_payment_transaction_ref_no=$9,installment_paid=$10,installment_pending=$11,due_notdue=$12,refund_processed=$13,refund_process_date=$14,min_50_received=$15,running_batch_start_date=$16,due=$17,current_status=$18,loan_partner=$19,dropout=$20,loan_rejected=$21,batch_deferred=$22,late_start=$23,date_of_disbursal=$24,deferemment_fees=$25,loan_foreclosure_amount=$26,deferrement_finance_approved=$27,special_case=$28,today_finance=$29,new_self_payment=$30,booking_amount=$31 WHERE id=$2",[refund_amount,updateId,loan_payment,total,total_without_tax,subvention,self_payment,remaining,loan_payment_transaction_ref_no,installment_paid,installment_pending,due_notdue,refund_processed,refund_date,min_50_received,running_batch_start_date,due,current_status,loan_partner,dropout,loan_rejected,batch_deferred,late_start,date_of_disbursal,deferemment_fees,loan_foreclosure_amount,deferrement_finance_approved,special_case,today_finance,new_self_payment,booking_amount]);

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
  if(ry == 1){
    console.log("zy");
    await db.query("UPDATE deferred_learners SET refund_amount=$1,loan_payment=$3,total=$4,total_without_tax=$5,subvention=$6,self_payment=$7,remaining=$8, loan_payment_transaction_ref_no=$9,installment_paid=$10,installment_pending=$11,due_notdue=$12,refund_processed=$13,refund_process_date=$14,min_50_received=$15,running_batch_start_date=$16,due=$17,current_status=$18,loan_partner=$19,dropout=$20,loan_rejected=$21,late_start=$22,date_of_disbursal=$23,deferemment_fees=$24,loan_foreclosure_amount=$25,deferrement_finance_approved=$26,special_case=$27,today_finance=$28,new_self_payment=$29,booking_amount=$30 WHERE customer_id=$2",[refund_amount,customer_id,loan_payment,total,total_without_tax,subvention,self_payment,remaining,loan_payment_transaction_ref_no,installment_paid,installment_pending,due_notdue,refund_processed,refund_date,min_50_received,running_batch_start_date,due,current_status,loan_partner,dropout,loan_rejected,late_start,date_of_disbursal,deferemment_fees,loan_foreclosure_amount,deferrement_finance_approved,special_case,today_finance,new_self_payment,booking_amount]);
  }

  if (Number(approved_installment) >=2 ){
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

    if(iy == 1){
      console.log(typeof (installment_1));
      console.log(installment_1);
      console.log(total);
      console.log(installment_1_date);
    await db.query("UPDATE installement_table SET total =$2,total_without_tax=$3,booking_amount=$4,installment_1=$5,installment_1_date=$6,installment_2=$7,installment_2_date=$8,installment_3=$9,installment_3_date=$10,installment_4=$11,installment_4_date=$12,installment_5=$13,installment_5_date=$14,installment_6=$15,installment_6_date=$16 WHERE customer_id=$1",
    [customer_id,total,total_without_tax,booking_amount,installment_1,installment_1_date,installment_2,installment_2_date,installment_3,installment_3_date,installment_4,installment_4_date,installment_5,installment_5_date,installment_6,installment_6_date]);
    }
    else{
      const check = await db.query("SELECT * FROM enrollment_data where customer_id =$1",[customer_id]);
      const customer_name = req.body.customer_name
      const phone_number = check.rows[0].phone_number 
      const email_address = req.body.customer_email
      const counsellor = check.rows[0].counsellor
      const team_lead = check.rows[0].team_lead
      const enrollment_date = check.rows[0].enrollment_date
      const program = check.rows[0].program
      const batch_date = check.rows[0].running_batch_start_date
      const offer_price = check.rows[0].offer_price
      const batch_number = check.rows[0].batch_number

      const batch_id = check.rows[0].batch_id
      const scholarship = check.rows[0].scholarship
      const discount = check.rows[0].discount
      const price_with_tax = req.body.price_with_tax
      const price_without_tax = check.rows[0].price_without_tax

      await db.query("Insert into installement_table (customer_id, customer_name,phone_number, email_address, counsellor,team_lead,enrollment_date,program,batch_number,batch_id,batch_date,offer_price,scholarship,discount,price_with_tax,price_without_tax,approved_installment,total,total_without_tax,booking_amount,installment_1,installment_1_date,installment_2,installment_2_date,installment_3,installment_3_date,installment_4,installment_4_date,installment_5,installment_5_date,installment_6,installment_6_date) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32)",
      [customer_id,customer_name,phone_number,email_address,counsellor,team_lead,enrollment_date,program,batch_number,batch_id,batch_date,offer_price,scholarship,discount,price_with_tax,price_without_tax,approved_installment,total,total_without_tax,booking_amount,installment_1,installment_1_date,installment_2,installment_2_date,installment_3,installment_3_date,installment_4,installment_4_date,installment_5,installment_5_date,installment_6,installment_6_date]);
    }

  }
res.redirect('/crud/read_fin');
    console.log(" record(s) updated");
   

}
}

