var express = require("express");

var router = express.Router();
var connection = require("../config/connection");
var cTable = require('console.table');
const db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.render("index");
});

router.get("/index", function(req, res) {
    res.render("index");
});

router.get("/subscribe", function(req, res) {
    res.render("subscribe");
});

router.post("/newworkout", function(req, res) {
    var workoutParameters = req.body;
    var workoutDuration = workoutParameters.workoutDuration;
    var muscleGroupArray = workoutParameters.muscleGroup;

    var promisesArray = [];
    var timePerExercise = 1;
    var numOfWorkouts = workoutDuration / timePerExercise;


    for (var i = 0; i < muscleGroupArray.length; i++) {
        promisesArray.push(db.Exercise.findAll({
            where: {
                minor_muscle: muscleGroupArray[i]
            }
        }))
    };

    Promise.all(promisesArray)
        .then(function(resultArray) {

            spreadArray = [];
            resultArray.forEach(nestedMuscle => spreadArray.push(...nestedMuscle));
            var totalNumberOfExercises = spreadArray.length;
            console.log(totalNumberOfExercises);

            var generatedWorkout = [];

            for (var i = 0; i < numOfWorkouts; i++) {
                console.log(i);
                generatedWorkout.push(spreadArray[Math.floor(Math.random() * totalNumberOfExercises)]);
            }

            var hbsObject = {
                workouts: generatedWorkout,
                duration: workoutDuration,
                timePerExercise: timePerExercise
            };

            res.render("newworkout", hbsObject);
        })
        .catch(e => { console.log(e) })

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

// Export routes for server.js to use.
module.exports = router;