// Define array to store entire workout

const entireWorkout = [];

// Get desired length of workout from form

const workoutTime = 60;

// Get muscle group selections from form and put into array

const muscleGroupArray = [];

// Calculate time alloted to each muscle group

const timePerMuscle = workoutTime / muscleGroupArray.length;

// Assume each workout lasts 2 minutes

const numberOfWorkoutsPerMuscle = timePerMuscle / 2

// Get exercise entries from SQL database

    // connection query where muscle = muscleGroupArray[0]

const workoutForMuscle = [];

// FOR loop --> math.random to select workout as long as workoutForMuscle less than numberOfWorkoutsPerMuscle

    // push to array; FOR loop entire thing as long as entireWorkout.length is less than muscleGroupArray.length

        // render entireWorkout to front end