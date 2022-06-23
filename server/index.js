require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const conn = require("./services/db");

app.use(cors());
app.use(bodyParser.json());

//Routers:
//Auth
const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

conn.sync();

app.listen(process.env.APP_PORT, () => {
    console.log(`Server listening on port ${process.env.APP_PORT}`);
});
