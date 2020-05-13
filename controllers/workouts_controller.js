var express = require("express");

var router = express.Router();
var connection = require("../config/connection");
var cTable = require('console.table');

// var workoutParameters = require("../public/assets/js/workouts");

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

router.get("/workout_history", function(req, res) {
    res.render("workout_history");
    });


router.get("/api/exercises", function(req, res) {
  // need to get front end form functionality to pass variables here
    // need to seqeulize this sht
        // need to dynamically create algo for workout
  
    // workoutParameters.getWorkoutDuration();
    // workoutParameters.getMuscleGroups();
    
    connection.query(`SELECT * FROM workouts_db.workouttable WHERE minor_muscle = "bicep"`, function(err, exerciseData) {
        if (err) throw err;
        console.table(exerciseData);
        var hbsObject = {
            workouts: exerciseData
        };        
        console.log("-- Exercise Name should appear --");
        console.log(hbsObject.workouts[0].Exercise);
        
        res.render("workout", hbsObject);
    })    
  });


// Export routes for server.js to use.
module.exports = router;