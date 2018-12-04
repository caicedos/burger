require("dotenv").config();

var mysql = require("mysql");
var keys = require("./keys");

var db = keys.db

var connection = mysql.createConnection(
  db
);

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

