const { findOneByEmailUser } = require("../controllers/user");
const { comparePassword, generateAccessToken } = require("./security");

const loginService = async (email, password) => {
    //FIND user by email and compare the given passwords, returns with tokens
    var user = await findOneByEmailUser(email);
    var result = await comparePassword(password, user.getDataValue("password"));
    if (!result) {
        Promise.reject();
    } else {
        let tokenData = {
            id: user.getDataValue("id"),
            email: user.getDataValue("email"),
        };
        const accessTokenPromise = await generateAccessToken(tokenData);
        return {
            user: {
                id: user.getDataValue("id"),
                firstName: user.getDataValue("firstName"),
                lastName: user.getDataValue("lastName"),
                email: user.getDataValue("email"),
            },
            accessToken: accessTokenPromise,
        };
    }
};

module.exports = { loginService };
