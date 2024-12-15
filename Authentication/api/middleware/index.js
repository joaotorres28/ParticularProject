var { registerUser, login, attachAllUsers, deleteUserAccount } = require('./userMW');

module.exports = {
    //Users
    registerUser,
    login,
    deleteUserAccount,
    attachAllUsers
};