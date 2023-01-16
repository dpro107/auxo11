const LocalStrategy = require('passport-local').Strategy;
const {Pool,Client} = require("pg");
const bcrypt = require('bcrypt');

const pool = new Pool({
  user: "devesh_db",
  host: "hvdataanalysis.c0t6c92ozrcn.ap-south-1.rds.amazonaws.com",
  database: "hero_data_devesh",
  password: "devesh@db123",
  port: 5432,
});

function initialize(passport) {
  console.log(' Authentication Initialized');
  const authenticateUser = (email, password, done) => {
    pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
      function(err, results) {
        if (err) {
          console.log(err);
        }
        console.log(results.rows);
        if (results.rows.length > 0) {
          const user = results.rows[0];
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
              console.log(err);
            }
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Password is not correct' });
            }
          });
        } else {
          return done(null, false, { message: 'You are not registered yet !' });
        }
      }
    );
  };
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      authenticateUser
    )
  );
  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    pool.query("SELECT * FROM users WHERE id = $1", [id], (err, results) => {
      if (err) {
        return done(err);
      }
      console.log(`ID is ${results.rows[0].id}`);
      return done(null, results.rows[0]);
    });
  });
}

module.exports = initialize;
