var express = require("express");

var router = express.Router();
var connection = require("../config/connection");
var cTable = require('console.table');
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());



// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.render("index");
});

router.post("/newworkout", function(req, res) {
    var workoutParameters = req.body;
    console.log("--------------");
    console.log(workoutParameters);
    var workoutDuration = workoutParameters.workoutDuration;

    console.log("-- Duration --");
    console.log(workoutDuration);

    var muscleGroupArray = workoutParameters.muscleGroup;
    console.log("-- Muscles --");
    console.log(muscleGroupArray);

    var workoutArray = [];


    for (var i = 0; i < muscleGroupArray.length; i++) {

        connection.query(`SELECT * FROM workouts_db.workouttable WHERE ?`, { minor_muscle: muscleGroupArray[i] }, function(err, exerciseData) {
            if (err) throw err;

            workoutArray.push(exerciseData)
                // var hbsObject = {
                //     workouts: exerciseData
                // };
                // console.log("----------- HERE ------------");
            console.log("------ Iteration -----");
            console.log(workoutArray);
        })
    }

    // res.render("newworkout", hbsObject);

});

router.get("/about", function(req, res) {
    res.render("about");
});

router.get("/workout_history", function(req, res) {
    res.render("workout_history");
});

// router.get("/newworkout", function(req, res) {
//     res.render("newworkout");
//     });

router.get("/api/exercises", function(req, res) {
    //   var workoutParameters = req.body;
    //   console.log("-- request body --");
    //   console.log(workoutParameters);
    //   res.json(workoutParameters)

    // need to get front end form functionality to pass variables here
    // need to seqeulize this sht
    // need to dynamically create algo for workout

    // workoutParameters.getWorkoutDuration();

    connection.query(`SELECT * FROM workouts_db.workouttable WHERE minor_muscle = "bicep"`, function(err, exerciseData) {
        if (err) throw err;
        console.table(exerciseData);
        var hbsObject = {
            workouts: exerciseData
        };

        res.render("new_workout", hbsObject);
    })
});


// Export routes for server.js to use.
module.exports = router;