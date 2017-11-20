var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb) {
        console.log("MODEL: selectAll");
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        console.log("MODEL: insertOne");
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(obj, condition, cb) {
        console.log("MODEL: updateOne");
        orm.updateOne("burgers", obj, condition, function(res) {
            cb(res);
        });
    }
};


module.exports = burger;