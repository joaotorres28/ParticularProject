var {Router} = require('express');
var user = require('./routes/users');

module.exports = () => {
    const router = Router();

    user(router);

    return router;
};