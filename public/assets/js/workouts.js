$("#submitWorkoutParameters").on("click", function(event) {
    event.preventDefault();
    console.log("FIRE UP!");
    var workoutDuration = parseInt($('input[name="workoutDuration"]:checked').serializeArray()[0].value);
    var muscleGroups = $('input[name="muscleGroup"]:checked').serializeArray().map(ele => ele.value);

var workoutParameters = {
    duration: workoutDuration,
    muscles: muscleGroups
}

$.post("/newworkout", workoutParameters, function(data) {
    if (data) {
        console.log(workoutParameters);
        window.location.href = "../newworkout";
    } else {
        console.log("Please check off parameters")
        }
    })
})

// module.exports = workoutParameters;