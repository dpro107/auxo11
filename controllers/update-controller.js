const db=require('../database')

module.exports={
editData:async(req,res)=>{
    const editId=req.params.id;
    const response= await db.query('SELECT * FROM enrollment_data where id=$1 ',[editId]);
    const responses= await db.query('SELECT * FROM test');
    const r= await db.query('SELECT distinct batch_id, batch_no, batch_start_date,program_name FROM batch_details order by batch_id ASC');
    const resp=await db.query('SELECT * FROM enrollment_data');
    const cound=await db.query('select * from team_lead order by counsellor ASC');
    const scholar=await db.query('SELECT * FROM scholarship');
    const lrr=await db.query('SELECT * FROM loan_rejected_reason');
    const fd=await db.query('SELECT * FROM final_disposition');
    const cs=await db.query('SELECT * FROM current_status');
    const rr=await db.query('SELECT * FROM refund_reason');
     const dr=await db.query('SELECT * FROM dropout_reason');
    const sab=await db.query('SELECT * FROM scholarship_approved_by');
    const lpp=await db.query('SELECT * FROM loan_partner');
    const dab=await db.query('SELECT * FROM additional_benefits');
    const tl = await db.query('SELECT distinct teamlead FROM team_lead');
    const test101 = await db.query('SELECT * FROM deferred_learners');


   

    var ir = response.rows[0];
    
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

  var current_d = Date.now();
  const user = req.user;
  var user_name = user.name;
  var user_email = user.email;
    










    await db.query("Insert into logs_users (customer_id,id,email_address, customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,scholarship_per,payment_mode,loan_partner,current_status,batch_type,final_disposition,approved_installment,remarks,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,batch_deferred,deferred_to_next_batch,deferred_date,approved_by,upcoming_batch,upcoming_batch_month,batch_date,bootcamp_date,date_of_disbursal,due,loan_payment,total,total_without_tax,due_notdue,min_50_received,subvention,self_payment,remaining,today_sales,approval_status,sales_pre_batch_comment,running_batch_start_date, additional_benefits , team_lead, batch_id , am_sales, department, username,edit_timestamp ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58,$59,$60,$61,$62)",
  [customer_id,editId,email_address,customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,scholarship_per,payment_mode,loan_partner,current_status,batch_type,final_disposition,approved_installment,remarks,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,batch_deferred,deferred_to_next_batch,deferred_date,approved_by,upcoming_batch,upcoming_batch_month,batch_date,bootcamp_date,date_of_disbursal,due,loan_payment,total,total_without_tax,due_notdue,min_50_received,subvention,self_payment,remaining,today_sales,approval_status,sales_pre_batch_comment,running_batch_start_date, additional_benefits , team_lead, batchid, am,"Sales",user_email,current_d]);
  


      res.render('crud-form', { editData:response.rows[0],fetchData:responses.rows,batchData:r.rows,leng:resp.rows.length,data_c:cound.rows,data_s:scholar.rows,lrr_s:lrr.rows,fd_s:fd.rows,cs_s:cs.rows,rr_s:rr.rows,dr_s:dr.rows,sab_s:sab.rows,lpp_s:lpp.rows, benefit:dab.rows , tl_s:tl.rows, test:test101.rows});
      console.log( " record fetched");
    
   
},
updateData:async(req,res)=>{
  const additional_benefits = req.body.additional_benefits;
  const customer_id=req.body.customer_id; 
  const  email_address=req.body.email_address; 
  const customer_name =req.body.customer_name; 
  const  phone_number = req.body.phone;
  const counsellor =req.body.counsellor;
  const team_lead = req.body.team_lead;
  const am = req.body.asst_mgr;

  var enrollment_date=null;
   if(req.body.enrollment_date ==" " | !req.body.enrollment_date)
    enrollment_date = null;
   else
    enrollment_date=req.body.enrollment_date;

  const program =req.body.program;
  const batchid = req.body.batchidd;
  const offer_price=req.body.offer_price;
  const price_without_tax =req.body.price_after;
  const discount =req.body.discount;
  const scholarship = req.body.scholarship;
  const date_of_disbursal=req.body.date_of_distribution;
  const running_batch_start_date=req.body.batch_date;

  
  const price_with_tax = req.body.price_with_tax;

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
  if(req.body.Refund_Date == " " | !req.body.Refund_Date)
    refund_date =null;
  else
    refund_date = req.body.Refund_Date;

  
    
  console.log("refund_date"+refund_date)

  const dropout = req.body.Dropout;
  const dropout_reason= req.body.Dropout_reason;
  var dropout_date=null;
  if(req.body.Dropout_Date ==" " | !req.body.Dropout_Date)
    dropout_date = null;
  else
    dropout_date=req.body.Dropout_Date;
  const late_start=req.body.late_start;
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

  
  const due=req.body.due_per;
  const loan_payment= req.body.loan_payment
  const total=req.body.total
  const total_without_tax=req.body.total_without_tax
  
  const due_notdue=req.body.due
  const min_50_received=req.body.min_50_received


  
  const subvention=req.body.subvention
  const self_payment=req.body.self_payment
  const remaining=req.body.remaining
  const approval_status=req.body.approval_status;
  const sales_pre_batch_comment=req.body.sales_pre_batch_comment;


  var currentdate = new Date();
  var datetime =  currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() ;

  const today_sales= datetime;
  


  ////

  const updateId=req.params.id;
  const response=await db.query("UPDATE enrollment_data SET customer_id=$1,email_address=$3, customer_name=$4,phone_number=$5,counsellor=$6,enrollment_date=$7,program=$8,offer_price=$9,price_without_tax=$10,discount=$11,scholarship=$12,price_with_tax=$13,batch_number=$14,scholarship_per=$15,payment_mode=$16,loan_partner=$17,current_status=$18,batch_type=$19,final_disposition=$20,approved_installment=$21,remarks=$22,loan_rejected=$23,loan_rejected_reason=$24,refund=$25,refund_reason=$26,refund_remarks=$27,refund_date=$28,dropout=$29,dropout_reason=$30,dropout_date=$31,late_start=$32,late_start_month=$33,batch_deferred=$34,deferred_to_next_batch=$35,deferred_date=$36,approved_by=$37,upcoming_batch=$38,upcoming_batch_month=$39,batch_date=$40,bootcamp_date=$41,date_of_disbursal=$42,due=$43,loan_payment=$44,total=$45,total_without_tax=$46,due_notdue=$47,min_50_received=$48,subvention=$49,self_payment=$50,remaining=$51,today_sales=$52,approval_status=$53,sales_pre_batch_comment=$54,running_batch_start_date=$55, additional_benefits=$56 , team_lead=$57, batch_id=$58 , am_sales = $59 WHERE id=$2",
  [customer_id,updateId,email_address,customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,scholarship_per,payment_mode,loan_partner,current_status,batch_type,final_disposition,approved_installment,remarks,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,batch_deferred,deferred_to_next_batch,deferred_date,approved_by,upcoming_batch,upcoming_batch_month,batch_date,bootcamp_date,date_of_disbursal,due,loan_payment,total,total_without_tax,due_notdue,min_50_received,subvention,self_payment,remaining,today_sales,approval_status,sales_pre_batch_comment,running_batch_start_date, additional_benefits , team_lead, batchid, am]);
   
  
  
  
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
    if (refund == "No" && loan_rejected =="No" && dropout =="No" && late_start =="No" && batch_deferred == "No"){
      console.log("hz");
      await db.query("UPDATE deferred_learners SET current_status=$1,loan_rejected=$2,loan_rejected_reason=$3,refund=$4,refund_reason=$5,refund_remarks=$6,refund_date=$7,dropout=$8,dropout_reason=$9,dropout_date=$10,late_start=$11,late_start_month=$12, in_batch ='Yes' WHERE customer_id=$13",[current_status,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,customer_id]);
    }
    else{
      console.log("zz");
      await db.query("UPDATE deferred_learners SET current_status=$1,loan_rejected=$2,loan_rejected_reason=$3,refund=$4,refund_reason=$5,refund_remarks=$6,refund_date=$7,dropout=$8,dropout_reason=$9,dropout_date=$10,late_start=$11,late_start_month=$12, in_batch ='No' WHERE customer_id=$13",[current_status,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,customer_id]);
    } 
  }

  else{
    if(batch_deferred == "Yes"){
      console.log("zy");
      await db.query("INSERT into deferred_learners (customer_id,email_address,customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,scholarship_per,payment_mode,loan_partner,current_status,batch_type,final_disposition,approved_installment,remarks,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,batch_deferred,deferred_to_next_batch,deferred_date,approved_by,upcoming_batch,upcoming_batch_month,batch_date,bootcamp_date,date_of_disbursal,due,loan_payment,total,total_without_tax,due_notdue,min_50_received,subvention,self_payment,remaining,today_sales,approval_status,sales_pre_batch_comment,running_batch_start_date, additional_benefits , team_lead, batch_id,in_batch) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58)",[customer_id,email_address,customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,scholarship_per,payment_mode,loan_partner,current_status,batch_type,final_disposition,approved_installment,remarks,loan_rejected,loan_rejected_reason,refund,refund_reason,refund_remarks,refund_date,dropout,dropout_reason,dropout_date,late_start,late_start_month,batch_deferred,deferred_to_next_batch,deferred_date,approved_by,upcoming_batch,upcoming_batch_month,batch_date,bootcamp_date,date_of_disbursal,due,loan_payment,total,total_without_tax,due_notdue,min_50_received,subvention,self_payment,remaining,today_sales,approval_status,sales_pre_batch_comment,running_batch_start_date, additional_benefits , team_lead, batchid,"No"]);
    }
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
    console.log("ii");
    if(iy == 0){
      console.log(Number(approved_installment));
      await db.query("INSERT into installement_table  (customer_id,email_address, customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,approved_installment,team_lead, batch_id,batch_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)",
      [customer_id,email_address,customer_name,phone_number,counsellor,enrollment_date,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,approved_installment,team_lead,batchid,batch_date]);
    }
    else{
      console.log("ss");
      await db.query("UPDATE installement_table SET program=$2,offer_price=$3,price_without_tax=$4,discount=$5,scholarship=$6,price_with_tax=$7,batch_number=$8,approved_installment=$9,batch_id=$10,batch_date=$11 WHERE customer_id=$1",
      [customer_id,program,offer_price,price_without_tax,discount,scholarship,price_with_tax,batch_number,approved_installment,batchid,batch_date]);
    }
  }    
  console.log(" record created");
  res.redirect('/crud/read');
      

}

}

