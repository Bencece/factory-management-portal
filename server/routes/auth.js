const express = require("express");
const { loginService } = require("../services/auth");
const router = express.Router();

router.post("/login", (req, res) => {
    //Login controller
    loginService(req.body.email, req.body.password)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(401);
        });
});

module.exports = router;
