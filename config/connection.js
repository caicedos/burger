var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  // port: 3306,
  user: "b0a9a0a1907a4d",
  password: "d5838235",
  database: "heroku_197371bae705b0d"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

// mysql://b0a9a0a1907a4d:d5838235@us-cdbr-iron-east-01.cleardb.net/heroku_197371bae705b0d?reconnect=true