var orm = require("../config/orm.js");


var burger = {

    selectAll: function(table, cb) {
        orm.selectAll(table, function(res) {
            cb(res);
        });
    },

    insertOne: function(table, col, val, cb) {
        orm.insertOne(table, col, val, function(res) {
            cb(res);
        });
    },

    updateOne: function(table, obj, condition, cb) {
        orm.updateOne(table, obj, condition, function(res) {
            cb(res);
        });
    }
};


module.exports = burger;