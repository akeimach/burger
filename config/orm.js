var connection = require("./connection.js");


var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        var questions = [];
        for (var i = 0; i < vals.length; i++) {
            questions.push("?");
        }
        var queryString = "INSERT INTO " + table + "  (";
        queryString += cols.toString();
        queryString += ") VALUES (";
        queryString += questions.toString();
        queryString += ")";
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    updateOne: function(table, obj, condition, cb) {
        var objects = [];
        for (var key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                //if ((typeof(obj[key] === "string") && (obj[key].))
                objects.push(key + "=" + obj[key]);
            }
        }
        var queryString = "UPDATE " + table + " SET ";
        queryString += objects.toString();
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table + "WHERE ";
        queryString += condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};


module.exports = orm;