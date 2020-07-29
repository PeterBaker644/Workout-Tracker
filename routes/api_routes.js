const Workout = require("../models/Workout");

// Basic structure in place, go route by route and rework for workouts.

module.exports = function (app) {

    app.get("/api/workouts/range", (req, res) => {
        console.log("[API] Getting all entries from the database");
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts", ({ body }, res) => {
        console.log("[API] Creating new workout");
        Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", ({ body }, res) => {
        console.log("[API] Creating new workout");
        Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // app.get("/populated", (req, res) => {
    //     db.Library.find({})
    //         .populate("books")
    //         .then(dbLibrary => {
    //             res.json(dbLibrary);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    // });
}