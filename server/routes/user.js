const express = require("express");
const router = express.Router();
const {
    readUser,
    createUser,
    updateUser,
    findOneByIdUser,
    deleteUser,
    findOneByEmailUser,
} = require("../controllers/user");

router.get("/", (req, res) => {
    //Get all user controller
    readUser()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error.message);
            res.sendStatus(500);
        });
});

router.post("/create", (req, res) => {
    //Create user controller
    createUser(
        req.body.email,
        req.body.firstName,
        req.body.lastName,
        req.body.password
    )
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(error.message);
            res.sendStatus(400);
        });
});

router.get("/:id", (req, res) => {
    //Get specific user information controller
    findOneByIdUser(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error.message);
            res.sendStatus(400);
        });
});

router.get("/email/:email", (req, res) => {
    //Get specific user by its email
    findOneByEmailUser(req.params.email)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error.message);
            res.sendStatus(400);
        });
});

router.put("/:id/update", (req, res) => {
    //Update user controller
    updateUser(
        req.params.id,
        req.body.email,
        req.body.firstName,
        req.body.lastName
    )
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error.message);
            res.sendStatus(400);
        });
});

router.delete("/:id", async (req, res) => {
    //Delete user controller
    deleteUser(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error.message);
            res.sendStatus(400);
        });
});

module.exports = router;
