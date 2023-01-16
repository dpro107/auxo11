const express = require('express');

const ejs = require('ejs');
const bcrypt = require('bcrypt');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');

const initializePassport = require('./pswConfig');
initializePassport(passport);
const app = express();




app.use(session({
    secret: 'secret',
    resave: 'false,',
    saveUninitialized: false,
  }));


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());




var createError = require("http-errors");

var path = require("path");
var cookieParser = require("cookie-parser");



var logger = require("morgan");

const db = require("./database");
const { response } = require("express");
const { Pool, Client } = require("pg");



app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const client = new Client({
  user: "devesh_db",
  host: "hvdataanalysis.c0t6c92ozrcn.ap-south-1.rds.amazonaws.com",
  database: "hero_data_devesh",
  password: "devesh@db123",
  port: 5432,
});
const pool = new Pool({
  user: "devesh_db",
  host: "hvdataanalysis.c0t6c92ozrcn.ap-south-1.rds.amazonaws.com",
  database: "hero_data_devesh",
  password: "devesh@db123",
  port: 5432,
});
pool.connect(function (err) {
  if (err) throw err;
  console.log("Database is connected successfully !");
  require("console-stamp")(console, "[HH:MM:ss.l]");
});
const pool1 = new Pool({
  user: "devesh_db",
  host: "hvdataanalysis.c0t6c92ozrcn.ap-south-1.rds.amazonaws.com",
  database: "hv_analytics_db",
  password: "devesh@db123",
  port: 5432,
});
pool1.connect(function (err) {
  if (err) throw err;
  console.log("Database is connected successfully !");
  require("console-stamp")(console, "[HH:MM:ss.l]");
});

var tot = 0;
var rev_gen = 0;

var dict = {};



var fs = require("fs");
var fetchData;





const request = require("request");



app.get("/tlogin", function (request, response) {
  
  response.render("login_sales");
});

app.post("/tlogin", function (request, response) {
  
  let name = request.body.username;
  let password = request.body.password;
  

  if (name && password) {
    
    pool.query(
      "SELECT * FROM login WHERE name = $1 AND password = $2",
      [name, password],
      function (error, results, fields) {
        

        if (error) throw error;
        
        if (results.rowCount > 0) {
          
          request.session.loggedin = true;
          request.session.username = name;
          var currentdate = new Date();
          var datetime =
            currentdate.getDate() +
            "/" +
            (currentdate.getMonth() + 1) +
            "/" +
            currentdate.getFullYear() +
            " @ " +
            currentdate.getHours() +
            ":" +
            currentdate.getMinutes() +
            ":" +
            currentdate.getSeconds();
          pool.query(
            "Insert into logs_sales (username,timestamp) VALUES ($1,$2)",
            [name, datetime]
          );
          
          response.redirect("/crud/read");
        } else {
          response.send("Incorrect Username and/or Password!");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});

app.get("/plogin", function (request, response) {
  
  response.render("login");
});

app.post("/plogin", function (request, response) {

  let name = request.body.username;
  let password = request.body.password;
 
});


app.get("/clogin", function (request, response) {
  
  response.render("login_post");
});


app.post("/clogin", function (request, response) {
  
  let name = request.body.username;
  let password = request.body.password;
  

  if (name && password) {
    
    pool.query(
      "SELECT * FROM login_post WHERE name = $1 AND password = $2",
      [name, password],
      function (error, results, fields) {
        

        if (error) throw error;
        
        if (results.rowCount > 0) {
          
          request.session.loggedi = true;
          request.session.username = name;
          var currentdate = new Date();
          var datetime =
            currentdate.getDate() +
            "/" +
            (currentdate.getMonth() + 1) +
            "/" +
            currentdate.getFullYear() +
            " @ " +
            currentdate.getHours() +
            ":" +
            currentdate.getMinutes() +
            ":" +
            currentdate.getSeconds();
          pool.query(
            "Insert into logs_sales (username,timestamp) VALUES ($1,$2)",
            [name, datetime]
          );
          

          response.redirect("/trud/post_batch");
        } else {
          response.send("Incorrect Username and/or Password!");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});

app.get("/mlogin", function (request, response) {
  
  response.render("pre_log");
});

app.post("/mlogin", function (request, response) {
  
  let name = request.body.username;
  let password = request.body.password;
  

  if (name && password) {
    
    pool.query(
      "SELECT * FROM login_post WHERE name = $1 AND password = $2",
      [name, password],
      function (error, results, fields) {
        

        if (error) throw error;
        
        if (results.rowCount > 0) {
          
          request.session.loggedi = true;
          request.session.username = name;
          var currentdate = new Date();
          var datetime =
            currentdate.getDate() +
            "/" +
            (currentdate.getMonth() + 1) +
            "/" +
            currentdate.getFullYear() +
            " @ " +
            currentdate.getHours() +
            ":" +
            currentdate.getMinutes() +
            ":" +
            currentdate.getSeconds();
          pool.query(
            "Insert into logs_sales (username,timestamp) VALUES ($1,$2)",
            [name, datetime]
          );
          

          response.redirect("/itc/read_approved");
        } else {
          response.send("Incorrect Username and/or Password!");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});



app.get("/plogin", function (request, response) {
  
  response.render("login");
});

app.post("/plogin", function (request, response) {
  
  let name = request.body.username;
  let password = request.body.password;
  
  if (name == "Akhilesh" && password == "AKH123") {
    request.session.log_in = true;
    response.redirect("/crud/read_fin");
  }
});


var programrouter = require('./routes/program_route');
var programUpdate = require('./routes/program_route');
var managerprogram = require('./routes/managerroute');

var additionalbenefitrouter = require('./routes/additionalbenefitrouter');
var additionalbenefitupdate  = require('./routes/additionalbenefitrouter');
var batchdetailsupdate = require('./routes/batchdetailsroute');

var deleteadditionalbenefitrouter = require('./routes/deleteadditionalbenefit');
var deleteadditionalbenefit = require('./routes/deleteadditionalbenefit');


var programdeliveryrouter = require('./routes/programdeliveryrouter');

var createRouter = require("./routes/create-route");
var readRouter = require("./routes/read-route");


var updateRouter = require("./routes/update-route");
var deleteRouter = require("./routes/delete-route");
var ccrouter = require("./routes/update-cc");
var insertroute = require("./routes/insert-route");
var insertreadroute = require("./routes/insert-read-route");
var uir = require("./routes/update-insert-route");
var hr = require("./routes/home_route");
var dr = require("./routes/delivery_route");
var approved_st = require("./routes/approval_status_route");
var na = require("./routes/ap_nap");
var post_batch = require("./routes/post_batch-route");
var pb = require("./routes/pb_ap");
var lf = require("./routes/link_fin._route");
var tr = require('./routes/test_update_route');
var readRouter_test = require('./routes/test-route')
var panelsalesroute = require('./routes/panelsalesroute');

var panelsalesroutehome = require("./routes/panelsalesroute");

var counsellorCreate = require('./routes/counsellor_route');
var counsellorUpdate = require('./routes/counsellor_route');

var changeMap = require('./routes/changeMap_route');
var benefitUpdate = require('./routes/benefitrouter');


app.use('/user',checkNotAuthenticated,hr);

app.use('/grud',checkNotAuthenticated,programUpdate);
app.use('/ben',checkNotAuthenticated,benefitUpdate);

app.use('/del',checkNotAuthenticated,programdeliveryrouter);
app.use('/mang',checkNotAuthenticated,managerprogram);



app.use("/crud",checkNotAuthenticated, createRouter);

app.use("/crud",checkNotAuthenticated, readRouter);
app.use("/crud", checkNotAuthenticated,updateRouter);
app.use("/crud", checkNotAuthenticated,deleteRouter);
app.use("/crud", checkNotAuthenticated,panelsalesroutehome);

app.use("/prud", checkNotAuthenticated,ccrouter);
app.use("/trud",checkNotAuthenticated, insertroute);
app.use("/trud",checkNotAuthenticated, insertreadroute);
app.use("/trud",checkNotAuthenticated, post_batch);
app.use("/krud",checkNotAuthenticated, pb);

app.use("/trud",checkNotAuthenticated, uir);


app.get('/', (req, res) => {
  res.render('login_auth');
});


app.get('/users/register', checkAuthenticated, (req, res) => {
  res.render('register');
});
app.get('/users/login', checkAuthenticated, (req, res) => {
  res.render('login_auth');
});

app.get('/user/dashboard', checkNotAuthenticated, (req, res) => {
  res.render('home', { user: req.user.name });
});


app.get('/crud/form', checkNotAuthenticated, (req, res) => {
  res.render("crud-form");
});

app.get('/crud/read', checkNotAuthenticated, (req, res) => {
  res.render("crud-table");
});

app.get('/crud/edit', checkNotAuthenticated, (req, res) => {
  res.render("crud-form");
});

app.get('/grud/insert', checkNotAuthenticated, (req, res) => {
  res.render("insert_program");
});

app.get('/grud/insert', checkNotAuthenticated, (req, res) => {
  res.render("insert_program");
});



app.get('/grud/update', checkNotAuthenticated, (req, res) => {
  res.render("update_program");
});

app.get('/mrud', checkNotAuthenticated, (req, res) => {
  res.render("insert_couns_tl");
});

app.get('/mrud/update', checkNotAuthenticated, (req, res) => {
  res.render("update_couns_tl");
});


app.get('/zrud', checkNotAuthenticated, (req, res) => {
  res.render("additionalbenefitinsert");
});


app.get('/drud/delete', checkNotAuthenticated, (req, res) => {
  res.render("deleteadditionalbenefit");
});

app.get('/maprud', checkNotAuthenticated, (req, res) => {
  res.render("change_mapping");
});

app.get('/brud', checkNotAuthenticated, (req, res) => {
  res.render("batch_create");
});


app.get('/brud/update', checkNotAuthenticated, (req, res) => {
  res.render("batch_update");
});


app.get('/read_fin', checkNotAuthenticated, (req, res) => {
  res.render("crud-table_fin");
});


app.get('/prud/edit', checkNotAuthenticated, (req, res) => {
  res.render("cc");
});

app.get('/read_deli', checkNotAuthenticated, (req, res) => {
  res.render("deli_table");
});

app.get('/wrud/edit', checkNotAuthenticated, (req, res) => {
  res.render("delivery");
});


app.get('/mang/insert', checkNotAuthenticated, (req, res) => {
  res.render("manager_insert");
});


app.get('/mang/update', checkNotAuthenticated, (req, res) => {
  res.render("manager_update");
});



app.get('/del/insert', checkNotAuthenticated, (req, res) => {
  res.render("deliveryprogram_insert");
});


app.get('/del/update', checkNotAuthenticated, (req, res) => {
  res.render("deliveryprogram_update");
});



app.get('/itc', checkNotAuthenticated, (req, res) => {
  res.render("approved-table");
});


app.get('/trud/post_batch', checkNotAuthenticated, (req, res) => {
  res.render("post_batch-table");
});


app.get("/xlogin", function (request, response) {
  
  response.render("xlogin");
});

app.post("/xlogin", function (request, response) {
  
  let key = request.body.key;
 

  if (key == "HAS486" || key== "HAS754" || key=="MXH271") {
    
    response.redirect("/crud/read");
  }


  if (key=="HAD439" ||key=="HAD501" ||key=="HAD832" ||key=="HAD918" ||key=="HAD273" ||key=="HAD402" || key=="MXH272" ) { 
    response.redirect("/crud/read_fin");
  }


  if (key == "HAF923" || key== "HAF212" || key=="MXH273") {
    
    response.redirect("/wrud/read_deli");
  }


  if (key=="HAA693" || key=="MXH274") {
    
    response.redirect("/itc/read_approved");
  }
  if (key=="HAA693" || key=="MXH275") {
    
    response.redirect("/trud/post_batch");
  }

  else{
    response.redirect("/errorpage")
  }
});


app.get("/errorpage", function (req, res) {
  res.render("errorpage");
});









app.post('/users/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

app.get('/users/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});
app.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});


app.post(
  '/users/login',
  passport.authenticate('local', {
    successRedirect: '/user/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true,
  })
);



function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/user/dashboard');
  }
  next();
}



function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/users/login');
}







app.use("/wrud",checkNotAuthenticated, dr);

app.use('/zrud',checkNotAuthenticated,additionalbenefitupdate);

app.use('/brud',checkNotAuthenticated,batchdetailsupdate);


app.use('/crud', checkNotAuthenticated,additionalbenefitrouter);

app.use('/drud',checkNotAuthenticated,deleteadditionalbenefit);
app.use('/crud',checkNotAuthenticated, deleteadditionalbenefitrouter);



app.use('/frud',checkNotAuthenticated,tr);

app.use('/frud',checkNotAuthenticated,readRouter_test);


app.use('/maprud',checkNotAuthenticated,changeMap);





app.use('/mrud',checkNotAuthenticated,counsellorCreate);
app.use('/mrud',checkNotAuthenticated,counsellorUpdate);



app.get('/herox/views/HVlogo.png', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/HVlogo.png'));
});

app.get('/HVlogo.png', function(req,res){
  res.sendFile(path.join(__dirname, '/views/HVlogo.png'))
});



app.get('/crud/HVlogo.png', function(req,res){
  res.sendFile(path.join(__dirname, '/views/HVlogo.png'))
});


app.use('/herox/views/HVlogo.png', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/HVlogo.png'));
});




app.get('/public/images/HV%20Logo%20Reverse@250x.png', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/HV.png'));
});

app.get('/wrud/public/images/HV%20Logo%20Reverse@250x.png', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/HV.png'));
});



app.get('/wrud/HVlogo.png', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/HV.png'));
});


app.get('/crud/public/images/HV%20Logo%20Reverse@250x.png', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/HV.png'));
});


app.get('/prud/public/images/HV%20Logo%20Reverse@250x.png', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/HV.png'));
});






var readRouter_fin = require("./routes/read-route_fin");
var readRouter_deli = require("./routes/read_route_deli");
const { ContextHandlerImpl } = require("express-validator/src/chain");
const { Console } = require("console");
const router = require("./routes/program_route");
app.use("/wrud", checkNotAuthenticated,readRouter_deli);

app.use("/itc", checkNotAuthenticated,approved_st);
app.use("/itc",checkNotAuthenticated, na);
app.use("/crud", checkNotAuthenticated,readRouter_fin);

app.use("/lf",checkNotAuthenticated, lf);


var b = false;



app.get("/crud/login", function (req, res) {
  res.render("login");
});


app.get("/grud/insert", function (req, res) {
  res.render("insert_program");
});

app.get("/ben/insert", function (req, res) {
  res.render("insert_benefit");
});


app.get("/del/insert", function (req, res) {
  res.render("deliveryprogram_insert");
});


app.get("/mang/insert", function (req, res) {
  res.render("manager_insert");
});


app.get("/grud/update", function (req, res) {
  res.render("update_program");
});



app.get("/ben/update", function (req, res) {
  res.render("update_benefit");
});

app.get("/mang/update", function (req, res) {
  res.render("manager_update");
});


app.get("/del/update", function (req, res) {
  res.render("deliveryprogram_update");
});



app.post("/crud/login", function (req, res) {
  const name = req.body.username;
  const password = req.body.password;
  if (name == "Akhilesh" && password == "AKH123") {
   

    res.redirect("/crud/read_fin", { user: "Akhilesh" });
  } else {
    res.redirect("/crud/login");
  }
});




app.use(function (req, res, next) {
  next(createError(404));
});










module.exports = app;