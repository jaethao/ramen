//hook up the mysql for use of the applicaiton.
var mysql = require("mysql");
require("dotenv").config();

//stash connection info in variables for easy adjustment
var dbHost = "localhost";
var dbPort = 3306;
var dbUser = "root";
var dbPassword = process.env.MYSQL_PASSWORD; //saved information for personal dba in .env
var dbDatabase = "ramen_db";

//connect the application up to the mysql dba.
var connection = mysql.createConnection({
   host: dbHost,
   port: dbPort,
   user: dbUser,
   password: dbPassword,
   database: dbDatabase,
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
