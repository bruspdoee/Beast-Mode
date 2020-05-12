-- Test database
DROP DATABASE IF EXISTS workouts_db;
CREATE DATABASE workouts_db;
USE workouts_db; 

DROP TABLE IF EXISTS `workout-air-table`;
CREATE TABLE `workout-air-table` (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	Exercise VARCHAR(255) NOT NULL,
	Equipment VARCHAR(255) NOT NULL,
   `Exercise Type` VARCHAR(255) NOT NULL,
    Major Muscle VARCHAR (255) NOT NULL,
    Minor Muscle VARCHAR (255) NOT NOT,
    Time_of_workout INTEGER (10),
   `Sets` INTEGER (10),
    createdAt DATETIME DEFAULT current_timestamp,
    updatedAt DATETIME DEFAULT current_timestamp
	);

