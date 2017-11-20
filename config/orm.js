var connection = require("./connection.js");


var orm = {

    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(table, col, val, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (" + col + ") ";
        queryString += "VALUES (?)";
        connection.query(queryString, [ val ], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(table, obj, condition, cb) {
        var objects = [];
        for (var key in obj) {
            if (Object.hasOwnProperty.call(obj, key))
                objects.push(key + " = " + obj[key]);
        }
        var queryString = "UPDATE " + table + " SET ";
        queryString += objects.toString();
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};


module.exports = orm;