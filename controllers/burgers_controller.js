var express = require("express");
var burger = require("../models/burger.js");


var router = express.Router();

router.get("/", function(req, res) {
    console.log("CONTROLLER: selectAll");
    burger.selectAll(function(data) {
        // Create object to send to handlebars
        var hbsObject = {
            burgers: data
        };
        console.log("CONTROLLER select returned");
        res.render("index", hbsObject);
    });
});


router.post("/api/burgers", function(req, res) {
    console.log("CONTROLLER: insertOne");
    burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result) {
        console.log("CONTROLLER insert returned");
        res.json({ id: result.insertId });
    });
});


router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("CONTROLLER: update " + condition);
    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (!result.affectedRows) return res.status(404).end();
        console.log("CONTROLLER update returned");
        res.status(200).end();
    });
});


module.exports = router;