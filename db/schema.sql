-- Test database
DROP DATABASE IF EXISTS workouts_db;
CREATE DATABASE workouts_db;
USE workouts_db;
DROP TABLE IF EXISTS workouttable;
CREATE TABLE workouttable (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    exercise VARCHAR(255) NOT NULL,
    equipment VARCHAR(255) NOT NULL,
    exercise_type VARCHAR(255) NOT NULL,
    major_muscle VARCHAR (255) NOT NULL,
    minor_muscle VARCHAR (255) NOT NOT,
    example VARCHAR (255),
    time_of_workout INTEGER (10),
    sets INTEGER (10),
    createdAt DATETIME DEFAULT current_timestamp,
    updatedAt DATETIME DEFAULT current_timestamp
    );
    INSERT INTO workouttable ()