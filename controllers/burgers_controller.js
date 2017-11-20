var express = require("express");
var burger = require("../models/burger.js");

router = express.Router();


///testing/////
// var rootDir = { root: __dirname + '/..' };
// router.get("/", function(req, res) {
//     res.sendFile("/public/test.html", rootDir);
// });
///testing////


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        // Create object to send to handlebars
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});


router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
    });
});


router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (!result.affectedRows) return res.status(404).end();
        res.status(200).end();
    });
});


router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.deleteOne(condition, function(result) {
        if (!result.affectedRows) return res.status(404).end();
        res.status(200).end();
    });
});


module.exports = router;