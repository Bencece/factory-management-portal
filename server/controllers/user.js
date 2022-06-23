const User = require("../models/user");

const createUser = (email, firstName, lastName, password) => {
    //CREATE user with password
    console.log(email, firstName, lastName, password);
    return User.create({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
    }).then(async (user) => {
        return user;
    });
};

const readUser = () => {
    //READ all user data
    return User.findAll().then((result) => {
        return result;
    });
};

const updateUser = (id, email, firstName, lastName) => {
    //UPDATE user with given data
    return User.findByPk(id).then((user) => {
        user.update({
            email: email,
            firstName: firstName,
            lastName: lastName,
        });
    });
};

const deleteUser = (id) => {
    //DELETE user by id
    return User.destroy({
        where: { userId: id },
    }).then((result) => {
        return result;
    });
};

const findOneByIdUser = (id) => {
    //FIND one user data with password via id
    return User.findByPk(id).then((result) => {
        return result;
    });
};

const findOneByEmailUser = (email) => {
    //FIND one user data via email
    return User.findOne({
        where: {
            email: email,
        },
    }).then((result) => {
        return result;
    });
};

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
    findOneByIdUser,
    findOneByEmailUser,
};
