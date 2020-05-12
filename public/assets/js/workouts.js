function getWorkoutDuration() { 
    var workoutDuration = parseInt($('input[name="workoutDuration"]:checked').serializeArray()[0].value);
    console.log("Workout Duration: " + workoutDuration);
    alert("Workout Duration: " + workoutDuration);
} 

function getMuscleGroups() {
var muscleGroups = $('input[name="muscleGroup"]:checked').serializeArray().map(ele => ele.value);
console.log(muscleGroups);
alert("Muscle Groups to BEAST: " + muscleGroups);
}

$("#submitWorkoutParameters").on("click", function(event) {
    console.log("FIRE UP!");
getWorkoutDuration();
getMuscleGroups();
})