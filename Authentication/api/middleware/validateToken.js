const jwt = require('jsonwebtoken');

function validateToken(req, res, next){
    var token = req.headers['x-access-token'];
    if (!token)
        return res.status(403).send({auth:false, message: 'No token provided'});

    jwt.validate(token, 'TheSecret_123456789', function(err, decoded){
        if (err)
            return res.status(500).send({auth:false, message: 'Failed to authenticate token.'});
        req.user = decoded.user;
        next();
    });
}

module.exports = validateToken;