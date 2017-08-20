// Import Orm.js
var orm = require("../config/orm.js");

// Code to call orm-functions

var burger = {
    all: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    add: function(col, val, callback) {
        orm.insertOne("burgers", function(res) {
            callback(res);
        });
    },
    update: function(objColVal, condiments, callback) {
        orm.updateOne("burgers", objColVal, condiments, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;