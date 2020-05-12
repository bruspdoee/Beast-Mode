var express = require("express");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {   
        res.render("index");
    });

router.get("/new_workout", function(req, res) {
res.render("new_workout");

});

router.get("/about", function(req, res) {
    res.render("about");
    });

router.get("/api/exercises", function(req, res) {
    // app.Exercise.findAll({

    // }).then(function(result){
    //   console.log(exercises)
    //   res.json(result);
    // });
  });


// Export routes for server.js to use.
module.exports = router;