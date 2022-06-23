require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = (password) => {
    //Hash the given password with bcrypt
    return bcrypt.hash(password, saltRounds).then((hash) => {
        return hash;
    });
};

const comparePassword = (password, hash) => {
    //Compare the given text password with the hash value from the database
    return bcrypt.compare(password, hash).then((result) => {
        return result;
    });
};

const generateAccessToken = (tokenData) => {
    //Generate access token based on secret
    return new Promise((resolve, reject) => {
        jwt.sign(
            tokenData,
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "60m",
            },
            (err, token) => {
                if (err || !token) {
                    console.log(err);
                    reject(err);
                }
                resolve(token);
            }
        );
    });
};

module.exports = {
    hashPassword,
    comparePassword,
    generateAccessToken,
};
