require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABESE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_URL,
        dialect: "mysql",
    }
);

try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
