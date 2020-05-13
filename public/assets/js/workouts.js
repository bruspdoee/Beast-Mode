var workoutParameters = {
   
    getWorkoutDuration: function(cb) { 
        var workoutDuration = parseInt($('input[name="workoutDuration"]:checked').serializeArray()[0].value);
        console.log("Workout Duration: " + workoutDuration);
        alert("Workout Duration: " + workoutDuration);
        cb(workoutDuration);
    }, 
    getMuscleGroups: function(cb) {
        var muscleGroups = $('input[name="muscleGroup"]:checked').serializeArray().map(ele => ele.value);
        console.log(muscleGroups);
        alert("Muscle Groups to BEAST: " + muscleGroups);
        cb(muscleGroups);
    }    
}

// $("#submitWorkoutParameters").on("click", function(event) {
//     console.log("FIRE UP!");
//     getWorkoutDuration();
//     getMuscleGroups();
// })

// module.exports = workoutParameters;