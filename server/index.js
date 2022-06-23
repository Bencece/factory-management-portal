require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const conn = require("./services/db");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./assets/swagger.json");

app.use(cors());
app.use(bodyParser.json());

//Routers:
//Auth
const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

//Swagger
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

conn.sync();

app.listen(process.env.APP_PORT, () => {
    console.log(`Server listening on port ${process.env.APP_PORT}`);
});
