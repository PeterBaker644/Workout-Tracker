const Workout = require("../models/Workout");

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
        const workout = new Workout(body);
        Workout.create(workout)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log("[API] Updating workout");
        Workout.findOneAndUpdate(
            { _id: req.params.id }, 
            { $push: { exercises: req.body } }
        )
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
}