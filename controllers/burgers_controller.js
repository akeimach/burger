var express = require("express");
var burger = require("../models/burger.js");


var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll("burgers", function(result) {
        // Create object to send to handlebars
        var hbsObject = { burgers: result };
        res.render("index", hbsObject);
    });
});


router.post("/api/burgers", function(req, res) {
    burger.insertOne("burgers", "burger_name", req.body.burger_name, function(result) {
        res.json({ id: result.insertId });
    });
});


router.put("/api/burgers/:id", function(req, res) {
    var obj = { devoured: req.body.devoured };
    var condition = "id = " + req.params.id;
    burger.updateOne("burgers", obj, condition, function(result) {
        if (!result.affectedRows) return res.status(404).end();
        res.status(200).end();
    });
});


module.exports = router;