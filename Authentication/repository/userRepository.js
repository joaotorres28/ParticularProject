var User = require('../models/user');

function registerNewUser(user) {
    try {
        user.save();
        return user;
    } catch (err) {
        throw err;
    }
}

function findAllUsers(){
    var allUsers = User.find(function (err) {
        if (err) {
            throw err;
        }
    });
    return allUsers;
}

module.exports.registerNewUser = registerNewUser;
module.exports.findAllUsers = findAllUsers;