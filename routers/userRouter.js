const express = require("express");
const userRouter = express.Router();
const { getAllUsers, addUser } = require("../controllers/User")
const { login, signup, protect } = require("../controllers/Auth");
userRouter
    .route("/")
    .all(protect)
    .get(getAllUsers)
    .post(addUser)

    
userRouter
    .route("/:id")
    .all(protect)
    .get((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "get a user",
            id: req.params.id,
        })

    })
    .put((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "modify a user",
            id: req.params.id
        })

    })
    .delete((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "delete a user",
            id: req.params.id
        })

    })

module.exports = userRouter;