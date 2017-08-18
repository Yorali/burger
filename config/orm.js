// Import connection.js
var connection = require("./connection.js");

// Helper function for SQL syntax.
// Snagged from CatsAppSol. from in-class
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Methods
// Largely snagged from 23-CatsAppSolutions

var orm = {
    selectAll: function(tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function(table, col, val, callback) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(val.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, val, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    updateOne: function(table, objColVal, condition, callback) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};


module.exports = orm;