DROP DATABASE IF EXISTS workout_db;
CREATE DATABASE workout_db;

USE workout_db;

-- Exercise 
DROP TABLE IF EXISTS exercise;
CREATE TABLE exercise(
    id INTEGER AUTO_INCREMENT,
    day VARCHAR(20) NOT NULL,
    name VARCHAR (255) NOT NULL,
    bodypart VARCHAR(255) NOT NULL,
    time DECIMAL (10, 2) NOT NULL,
    createAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
	PRIMARY KEY(id)

);

DROP TABLE IF EXISTS nutrition;
CREATE TABLE nutrition(
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    calories INTEGER,
    description TEXT,
    -- createdAt and updatedAt timestamps are set at the same time, when We have created document
    createAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
	PRIMARY KEY(id)

)