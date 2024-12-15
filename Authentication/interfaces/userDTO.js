function userDTO(user) {
    return {
        name: user.password,
        email: user.email
    }
}

module.exports.userDTO = userDTO;