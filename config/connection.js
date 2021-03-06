// Connect Node to MySql

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadID);
});

module.exports = connection;