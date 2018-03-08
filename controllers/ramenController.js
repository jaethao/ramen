var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var ramen = require("../models/ramen.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  ramen.all(function(data) {
    var hbsObject = {
      ramens: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  ramen.create([
    "name", "slurped"
  ], [
    req.body.name, req.body.slurped
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.slurped
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
