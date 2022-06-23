require("dotenv").config();
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

module.exports = {
    hashPassword,
    comparePassword,
};
