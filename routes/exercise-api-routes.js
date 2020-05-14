// Dependencies
//const app = require("express");
//Path
const db = require("../models");
const path = require("path");

module.exports = function(app) {
    app.get("/exercises", function(req, res) {
        db.Exercise.findAll({}).then(function(result) {
            console.log(result)
            res.json(result);
        });
    });
    app.get("/exercises", function(req, res) {
        db.Exercise.findAll({}).then(function(result) {
            console.log(exercises)
            res.json(result);
        });
    });
    //POST, Create a new activity
    app.post("/exercises", function(req, res) {
        const exercise = req.body;
        db.Exercise.create(exercise)
            .then(function(result) {
                res.json({
                    success: true,
                });
            })
            .catch(function(err) {
                res.status(500).json({
                    //validated
                    success: false,
                    errors: err.errors,
                });
            });
    });
    // single name
    app.get("/exercises/:id", function(req, res) {
        db.Exercise.findAll({
                where: {
                    id: req.params.id
                }
            })
            .then(function(result) {
                console.log(result);
                res.json({
                    success: true,
                });
            });
    });
    //Delete,
    app.delete("/nutrition/:id", function(req, res) {
        db.Nutrition.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function(result) {
                res.json(result);
            });
    });
}