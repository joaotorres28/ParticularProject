var { Router } = require('express');
var router = express.Router();
var middlewares = require('../middleware');

module.exports = (app) => {

  app.user('/users', router);

  router.post('/register', middlewares.registerUser, function (req, res) {
    return res.json({ message: 'User was successfully registered.' }).status(201);
  });

  router.post('/login', middlewares.login, function (req, res) {
    return res.json({ message: 'Logged in.'}).status(201);
  })

  router.delete('/:client_id', middlewares.deleteUserAccount, function (req, res){
    return res.json({ message: 'User\'s account was successfully delete.'}).status(200);
  });

  router.get('/', middlewares.attachAllUsers, function (req, res){
    return res.json({ users: req.allUsers }).status(200);
  });
}
