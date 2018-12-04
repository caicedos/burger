var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  port: 3306,
  user: "ba72d02a3d2800",
  password: "da8054e5",
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

// mysql://ba72d02a3d2800:da8054e5@us-cdbr-iron-east-01.cleardb.net/heroku_4a804d9888ecc87?reconnect=true