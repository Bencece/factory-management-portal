require("dotenv").config();
const express = require("express");
const app = express();
const conn = require("./services/db");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Server listening on port ${process.env.APP_PORT}`);
});
