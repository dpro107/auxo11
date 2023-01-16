const db=require('../database');

    
module.exports = {
 listall: async(req,res)=>{
    const responses= await db.query('SELECT * FROM enrollment_data');
    
    
    // const sales_c = await db.query("select count(email_address), sum(price_without_tax) from enrollment_data where enrollment_date = current_date - integer '1'");

    const sales_c = await db.query("select count(email_address) from enrollment_data where  date_part('month', enrollment_date) = date_part('month', current_date-1) and date_part('year', enrollment_date) = date_part('year', current_date-1) ");
    
    
    // const sales_p = await db.query("select count(email_address)/count(distinct(date_part('day',enrollment_date))) as count from enrollment_data where date_part('month',enrollment_date) = date_part('month',current_date)-1 and date_part('year',enrollment_date) = date_part('year',current_date) ");

    const sales_p = await db.query("select count(email_address) from enrollment_data where date_part('day',enrollment_date) < date_part('day',current_date)  and date_part('month',enrollment_date) = date_part('month',current_date-1)-1 and date_part('year',enrollment_date) = date_part('year',current_date-1) ");

    const month_revenue_c = await db.query("select sum(price_without_tax)/10^5 as sum from enrollment_data where  date_part('month', enrollment_date) = date_part('month', current_date-1) and date_part('year', enrollment_date) = date_part('year', current_date-1) ");

    const month_revenue_p = await db.query("select sum(price_without_tax)/10^5 as sum from enrollment_data where date_part('day',enrollment_date) < date_part('day',current_date)  and date_part('month',enrollment_date) = date_part('month',current_date-1)-1 and date_part('year',enrollment_date) = date_part('year',current_date-1) ");

    const active_learners = await db.query("select count(case when (date_part('month', current_date)>=4 and date_part('year',current_date) = date_part('year', enrollment_date) and date_part('month', enrollment_date)>=4) then email_address else(case when (date_part('year', current_date)-1 = date_part('year', enrollment_date) and date_part('month', enrollment_date)>=4) or (date_part('year', enrollment_date) = date_part('year', current_date) and date_part('month', enrollment_date) <= date_part('month', current_date)) then email_address end)end) from enrollment_data");
    
    const program = await db.query("select distinct program, batch_number, batch_date,count(email_address) from enrollment_data where batch_date >= current_date group by program,batch_number,batch_date order by batch_date");

    const mr = await db.query("select sum(case when date_part('month',current_date)>=4 and date_part('month',enrollment_date)>=4 and date_part('year',current_date) = date_part('year',enrollment_date) then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',enrollment_date)>=4 and date_part('year',enrollment_date)=date_part('year',current_date)-1) or (date_part('month',enrollment_date)<4 and date_part('year',enrollment_date)=date_part('year',current_date))) then price_without_tax end) end)/10^5 as test,date_part('month',enrollment_date),to_char(enrollment_date,'Month')from enrollment_data group by date_part('month',enrollment_date),to_char(enrollment_date,'Month')   order by date_part('month',enrollment_date)"); 

    const total_revenue = await db.query("select sum(case when date_part('month',current_date)>=4 and date_part('month',enrollment_date)>=4 and date_part('year',current_date) = date_part('year',enrollment_date) then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',enrollment_date)>=4 and date_part('year',enrollment_date)=date_part('year',current_date)-1) or (date_part('month',enrollment_date)<4 and date_part('year',enrollment_date)=date_part('year',current_date))) then price_without_tax end) end)/10^5 as test from enrollment_data");

    const total_revenuep = await db.query("select sum(case when date_part('month',current_date)>=4 and date_part('month',enrollment_date)>=4 and date_part('month',enrollment_date) <=date_part('month',current_date) and date_part('year',current_date) -1 = date_part('year',enrollment_date) then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',enrollment_date)>=4 and date_part('year',enrollment_date)=date_part('year',current_date)-2) or (date_part('month',enrollment_date)<= date_part('month',current_date) and date_part('year',enrollment_date)=date_part('year',current_date)-1)) then price_without_tax end) end)/10^5 as test from enrollment_data") 

    const refund_revenue = await db.query("select sum(case when date_part('month',current_date)>=4 and date_part('month',refund_process_date)>=4 and date_part('year',current_date) = date_part('year',refund_process_date) and (refund_processed ='Yes') then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',refund_process_date)>=4 and date_part('year',refund_process_date)=date_part('year',current_date)-1) or (date_part('month',refund_process_date)<4 and date_part('year',refund_process_date)=date_part('year',current_date))) and (refund_processed ='Yes') then price_without_tax end) end)/10^5 as test from enrollment_data");

    const refund_revenuep = await db.query("select sum(case when date_part('month',current_date)>=4 and date_part('month',refund_process_date)>=4 and date_part('month',refund_process_date)<=date_part('month',current_date) and date_part('year',current_date)-1 = date_part('year',refund_process_date) and (refund_processed ='Yes') then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',refund_process_date)>=4 and date_part('year',refund_process_date)=date_part('year',current_date)-2) or (date_part('month',refund_process_date)<=date_part('month',current_date) and date_part('year',refund_process_date)=date_part('year',current_date)-1)) and (refund_processed ='Yes') then price_without_tax end) end)/10^5 as test from enrollment_data");

    // Dropout_date isnull and date_of_acce isnull (Pre+post)
    const dropout1_revenue = await db.query("select sum(case when date_part('month',current_date)>=4 and date_part('month',enrollment_date)>=4 and date_part('year',current_date) = date_part('year',enrollment_date) and (dropout ='Yes' or delivery_final_status ='Dropout') and dropout_date isnull and delivery_date_of_acceptance isnull then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',enrollment_date)>=4 and date_part('year',enrollment_date)=date_part('year',current_date)-1)  or (date_part('month',enrollment_date)<4 and date_part('year',enrollment_date)=date_part('year',current_date)))  and (dropout ='Yes' or delivery_final_status ='Dropout') then price_without_tax end) end)/10^5 as test from enrollment_data");

    const dropout1_revenuep = await db.query("select sum(case when date_part('month',current_date)>=4 and date_part('month',enrollment_date)>=4 and date_part('month',enrollment_date)<= date_part('month',current_date) and date_part('year',current_date)-1 = date_part('year',enrollment_date) and (dropout ='Yes' or delivery_final_status ='Dropout') and dropout_date isnull and delivery_date_of_acceptance isnull then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',enrollment_date)>=4 and date_part('year',enrollment_date)=date_part('year',current_date)-2)  or (date_part('month',enrollment_date)<=date_part('month',current_date) and date_part('year',enrollment_date)=date_part('year',current_date)-1))  and (dropout ='Yes' or delivery_final_status ='Dropout') then price_without_tax end) end)/10^5 as test from enrollment_data");

    // Dropout_date (pre batch data fetch)    
    const dropout2_revenue = await db.query("select sum(case when date_part('month',current_date)>=4 and date_part('month',dropout_date)>=4 and date_part('year',current_date) = date_part('year',dropout_date) and dropout ='Yes' and (delivery_final_status ='' or delivery_final_status isnull) then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',dropout_date)>=4 and date_part('year',dropout_date)=date_part('year',current_date)-1) or (date_part('month',dropout_date)<4 and date_part('year',dropout_date)=date_part('year',current_date))) and dropout ='Yes' and (delivery_final_status ='' or delivery_final_status isnull) then price_without_tax end) end)/10^5 as test from enrollment_data");

    const dropout2_revenuep = await db.query("select sum(case when date_part('month',current_date)>=4 and date_part('month',dropout_date)>=4 and date_part('month',dropout_date)<= date_part('month',current_date) and date_part('year',current_date)-1 = date_part('year',dropout_date) and dropout ='Yes' and (delivery_final_status ='' or delivery_final_status isnull) then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',dropout_date)>=4 and date_part('year',dropout_date)=date_part('year',current_date)-2) or (date_part('month',dropout_date)<=date_part('month',current_date) and date_part('year',dropout_date)=date_part('year',current_date)-1)) and dropout ='Yes' and (delivery_final_status ='' or delivery_final_status isnull) then price_without_tax end) end)/10^5 as test from enrollment_data");

    // Delivery_date_acceptance (post batch data fetch)
    const dropout3_revenue = await db.query("select sum(case when date_part('month',current_date)>=4 and date_part('month',delivery_date_of_acceptance)>=4 and date_part('year',current_date) = date_part('year',delivery_date_of_acceptance) and delivery_final_status ='Dropout' then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',delivery_date_of_acceptance)>=4 and date_part('year',delivery_date_of_acceptance)=date_part('year',current_date)-1) or (date_part('month',delivery_date_of_acceptance)<4 and date_part('year',delivery_date_of_acceptance)=date_part('year',current_date))) and delivery_final_status ='Dropout' then price_without_tax end) end)/10^5 as test from enrollment_data");

    const dropout3_revenuep = await db.query("select sum(case when date_part('month',current_date)>=4 and date_part('month',delivery_date_of_acceptance)>=4 and date_part('month',delivery_date_of_acceptance)<= date_part('month',current_date) and date_part('year',current_date)-1 = date_part('year',delivery_date_of_acceptance) and delivery_final_status ='Dropout' then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',delivery_date_of_acceptance)>=4 and date_part('year',delivery_date_of_acceptance)=date_part('year',current_date)-2) or (date_part('month',delivery_date_of_acceptance)<=date_part('month',current_date) and date_part('year',delivery_date_of_acceptance)=date_part('year',current_date)-1)) and delivery_final_status ='Dropout' then price_without_tax end) end)/10^5 as test from enrollment_data");

    const loan_rejected_revenue = await db.query("select sum(case when date_part('month',current_date)>=4 and date_part('month',enrollment_date)>=4 and date_part('year',current_date) = date_part('year',enrollment_date) and (loan_rejected ='Yes') then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',enrollment_date)>=4 and date_part('year',enrollment_date)=date_part('year',current_date)-1) or (date_part('month',enrollment_date)<4 and date_part('year',enrollment_date)=date_part('year',current_date))) and (loan_rejected ='Yes') then price_without_tax end) end)/10^5 as test from enrollment_data");

    const loan_rejected_revenuep = await db.query("select sum(case when date_part('month',current_date)>=4 and date_part('month',enrollment_date)>=4 and date_part('month',enrollment_date)<= date_part('month',current_date) and date_part('year',current_date)-1 = date_part('year',enrollment_date) and (loan_rejected ='Yes') then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',enrollment_date)>=4 and date_part('year',enrollment_date)=date_part('year',current_date)-2) or (date_part('month',enrollment_date)<=date_part('month',current_date) and date_part('year',enrollment_date)=date_part('year',current_date)-1)) and (loan_rejected ='Yes') then price_without_tax end) end)/10^5 as test from enrollment_data");


    const total_count = await db.query("select count(case when date_part('month',current_date)>=4 and date_part('month',enrollment_date)>=4 and date_part('year',current_date) = date_part('year',enrollment_date) then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',enrollment_date)>=4 and date_part('year',enrollment_date)=date_part('year',current_date)-1) or (date_part('month',enrollment_date)<4 and date_part('year',enrollment_date)=date_part('year',current_date))) then price_without_tax end) end) as test from enrollment_data");

    const total_countp = await db.query("select count(case when date_part('month',current_date)>=4 and date_part('month',enrollment_date)>=4 and date_part('month',enrollment_date) <=date_part('month',current_date) and date_part('year',current_date) -1 = date_part('year',enrollment_date) then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',enrollment_date)>=4 and date_part('year',enrollment_date)=date_part('year',current_date)-2) or (date_part('month',enrollment_date)<= date_part('month',current_date) and date_part('year',enrollment_date)=date_part('year',current_date)-1)) then price_without_tax end) end) as test from enrollment_data");

    const refund_count = await db.query("select count(case when date_part('month',current_date)>=4 and date_part('month',refund_process_date)>=4 and date_part('year',current_date)-1 = date_part('year',refund_process_date) and (refund_processed ='Yes') then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',refund_process_date)>=4 and date_part('year',refund_process_date)=date_part('year',current_date)-1) or (date_part('month',refund_process_date)<4 and date_part('year',refund_process_date)=date_part('year',current_date))) and (refund_processed ='Yes') then price_without_tax end) end) as test from enrollment_data");

    const refund_countp = await db.query("select count(case when date_part('month',current_date)>=4 and date_part('month',refund_process_date)>=4 and date_part('month',refund_process_date)<=date_part('month',current_date) and date_part('year',current_date)-1 = date_part('year',refund_process_date) and (refund_processed ='Yes') then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',refund_process_date)>=4 and date_part('year',refund_process_date)=date_part('year',current_date)-2) or (date_part('month',refund_process_date)<=date_part('month',current_date) and date_part('year',refund_process_date)=date_part('year',current_date)-1)) and (refund_processed ='Yes') then price_without_tax end) end) as test from enrollment_data");


    // Dropout_date isnull and date_of_acce isnull (Pre+post)
    const dropout1_count = await db.query("select count(case when date_part('month',current_date)>=4 and date_part('month',enrollment_date)>=4 and date_part('year',current_date) = date_part('year',enrollment_date) and (dropout ='Yes' or delivery_final_status ='Dropout') and dropout_date isnull and delivery_date_of_acceptance isnull then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',enrollment_date)>=4 and date_part('year',enrollment_date)=date_part('year',current_date)-1)  or (date_part('month',enrollment_date)<4 and date_part('year',enrollment_date)=date_part('year',current_date)))  and (dropout ='Yes' or delivery_final_status ='Dropout') then price_without_tax end) end) as test from enrollment_data");

    const dropout1_countp = await db.query("select count(case when date_part('month',current_date)>=4 and date_part('month',enrollment_date)>=4 and date_part('month',enrollment_date)<= date_part('month',current_date) and date_part('year',current_date)-1 = date_part('year',enrollment_date) and (dropout ='Yes' or delivery_final_status ='Dropout') and dropout_date isnull and delivery_date_of_acceptance isnull then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',enrollment_date)>=4 and date_part('year',enrollment_date)=date_part('year',current_date)-2)  or (date_part('month',enrollment_date)<=date_part('month',current_date) and date_part('year',enrollment_date)=date_part('year',current_date)-1))  and (dropout ='Yes' or delivery_final_status ='Dropout') then price_without_tax end) end) as test from enrollment_data");



    // Dropout_date (pre batch data fetch)    
    const dropout2_count = await db.query("select count(case when date_part('month',current_date)>=4 and date_part('month',dropout_date)>=4 and date_part('year',current_date) = date_part('year',dropout_date) and dropout ='Yes' and (delivery_final_status ='' or delivery_final_status isnull) then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',dropout_date)>=4 and date_part('year',dropout_date)=date_part('year',current_date)-1) or (date_part('month',dropout_date)<4 and date_part('year',dropout_date)=date_part('year',current_date))) and dropout ='Yes' and (delivery_final_status ='' or delivery_final_status isnull) then price_without_tax end) end) as test from enrollment_data");

    const dropout2_countp = await db.query("select count(case when date_part('month',current_date)>=4 and date_part('month',dropout_date)>=4 and date_part('month',dropout_date)<= date_part('month',current_date) and date_part('year',current_date)-1 = date_part('year',dropout_date) and dropout ='Yes' and (delivery_final_status ='' or delivery_final_status isnull) then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',dropout_date)>=4 and date_part('year',dropout_date)=date_part('year',current_date)-2) or (date_part('month',dropout_date)<=date_part('month',current_date) and date_part('year',dropout_date)=date_part('year',current_date)-1)) and dropout ='Yes' and (delivery_final_status ='' or delivery_final_status isnull) then price_without_tax end) end) as test from enrollment_data");

    // Delivery_date_acceptance (post batch data fetch)
    const dropout3_count = await db.query("select count(case when date_part('month',current_date)>=4 and date_part('month',delivery_date_of_acceptance)>=4 and date_part('year',current_date) = date_part('year',delivery_date_of_acceptance) and delivery_final_status ='Dropout' then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',delivery_date_of_acceptance)>=4 and date_part('year',delivery_date_of_acceptance)=date_part('year',current_date)-1) or (date_part('month',delivery_date_of_acceptance)<4 and date_part('year',delivery_date_of_acceptance)=date_part('year',current_date))) and delivery_final_status ='Dropout' then price_without_tax end) end) as test from enrollment_data");

    const dropout3_countp = await db.query("select count(case when date_part('month',current_date)>=4 and date_part('month',delivery_date_of_acceptance)>=4 and date_part('month',delivery_date_of_acceptance)<= date_part('month',current_date) and date_part('year',current_date)-1 = date_part('year',delivery_date_of_acceptance) and delivery_final_status ='Dropout' then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',delivery_date_of_acceptance)>=4 and date_part('year',delivery_date_of_acceptance)=date_part('year',current_date)-2) or (date_part('month',delivery_date_of_acceptance)<=date_part('month',current_date) and date_part('year',delivery_date_of_acceptance)=date_part('year',current_date)-1)) and delivery_final_status ='Dropout' then price_without_tax end) end) as test from enrollment_data");

    const loan_rejected_count = await db.query("select count(case when date_part('month',current_date)>=4 and date_part('month',enrollment_date)>=4 and date_part('year',current_date) = date_part('year',enrollment_date) and (loan_rejected ='Yes') then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',enrollment_date)>=4 and date_part('year',enrollment_date)=date_part('year',current_date)-1) or (date_part('month',enrollment_date)<4 and date_part('year',enrollment_date)=date_part('year',current_date))) and (loan_rejected ='Yes') then price_without_tax end) end) as test from enrollment_data");

    const loan_rejected_countp = await db.query("select count(case when date_part('month',current_date)>=4 and date_part('month',enrollment_date)>=4 and date_part('month',enrollment_date)<= date_part('month',current_date) and date_part('year',current_date)-1 = date_part('year',enrollment_date) and (loan_rejected ='Yes') then price_without_tax else(case when date_part('month',current_date)<4 and ((date_part('month',enrollment_date)>=4 and date_part('year',enrollment_date)=date_part('year',current_date)-2) or (date_part('month',enrollment_date)<=date_part('month',current_date) and date_part('year',enrollment_date)=date_part('year',current_date)-1)) and (loan_rejected ='Yes') then price_without_tax end) end) as test from enrollment_data");

    
    var net_revenue = total_revenue.rows[0].test - refund_revenue.rows[0].test - dropout1_revenue.rows[0].test - dropout2_revenue.rows[0].test - dropout3_revenue.rows[0].test - loan_rejected_revenue.rows[0].test;
    net_revenue = net_revenue.toFixed(0);
    
    var net_revenuep = total_revenuep.rows[0].test - refund_revenuep.rows[0].test - dropout1_revenuep.rows[0].test - dropout2_revenuep.rows[0].test - dropout3_revenuep.rows[0].test - loan_rejected_revenuep.rows[0].test;
    net_revenuep = net_revenuep.toFixed(0);
    
    
    
    
    var net_count = total_count.rows[0].test - refund_count.rows[0].test - dropout1_count.rows[0].test - dropout2_count.rows[0].test - dropout3_count.rows[0].test - loan_rejected_count.rows[0].test;
    
    var net_countp = total_countp.rows[0].test - refund_countp.rows[0].test - dropout1_countp.rows[0].test - dropout2_countp.rows[0].test - dropout3_countp.rows[0].test - loan_rejected_countp.rows[0].test;







    console.log(net_revenuep);
    console.log(net_countp);
    console.log("hhhhhhhyyyyyyyyyyyyyyyyyyy");
    

    const jan = mr.rows[0];
    const feb = mr.rows[1];
    const mar = mr.rows[2];
    const apr = mr.rows[3];
    const may = mr.rows[4];
    const jun = mr.rows[5];
    const jul = mr.rows[6];
    const aug = mr.rows[7];
    const sep = mr.rows[8];
    const oct = mr.rows[9];
    const nov = mr.rows[10];
    const dec = mr.rows[11];


    const mr2 = mr.rows[3];
    console.log(mr2.test);
    
    var current_d = Date.now();
    const user = req.user;
    var user_name = user.name;
    var user_email = user.email;
  
    await db.query("INSERT into logs_sales(username,email,timestamp) values($1,$2,$3)",[user_name,user_email,current_d]);

    res.render('home' , {fetchData:responses.rows, sale:sales_c.rows[0] ,sale_p:sales_p.rows[0], rev_c:month_revenue_c.rows[0],rev_m:month_revenue_p.rows[0] , dataact:active_learners.rows , datanet:net_revenue.rows, program: program.rows,mr1:mr.rows,jan:jan.test,feb:feb.test,mar:mar.test,apr:apr.test,may:may.test,jun:jun.test,jul:jul.test,aug:aug.test,sep:sep.test,oct:oct.test,nov:nov.test,dec:dec.test,rev_n:net_revenue,count_n:net_count, rev_p:net_revenuep,count_p:net_countp});
    
    
}
}

