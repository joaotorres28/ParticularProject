var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req,res){
  var user = new UserModel();
  user.name = req.body.name;
  user.password = bcrypt.hashSync(req.body.password,8);
  user.email = req.body.email;
  user.date = req.body.date;
  user.isAdmin = req.body.isAdmin;
    user.save(function (err){
      if(err)
        return res.status(500).send("There is a problem registering the user.");
      res.json({message:"User registered!"});
    })
});

router.post('/login',function (req,res){
  UserModel.findOne({email: req.body.email}, function(err,user){
    if (err) throw err;
    if (!user) {res.json({success:false,message:'Authentication failed.'});}
    else if(user){
      if(!bcrypt.compareSync(req.body.password, user.password))
      return res.status(401).send({auth:false,token:null,message: 'Auth failed.'});
      else {
        const payload= {user:user.email};
        var theToken = JsonWebTokenError.sign(payload, 'TheSecret_123456789', {expiresIn:86400});
        res.json({success:true,message:'Enjoy your token!',token:theToken});
      }
    }
  });
});

function hasRole(userEmail, role, func){
  UserModel.findOne({email: userEmail}, function (err, user){
    if (err) throw err;

    if(!user){
      res.json({success: false, message: 'Authentication failed.'});
    }
    else if (user) {
      func(role === 'administrator' && user.isAdmin === true)
    }
  })
}

router.get('/', VerifyToken, function(req, res){
  hasRole(req.user, 'administrator', function (decision) {
    if (!decision)
      return res.status(403).send(
        {auth:false, token: null, message: 'You have no authrization.'}
    );
    else
      UserModel.find(function (err, users){
        if (err) res.send(err);
        res.json(users);
      })
  });
})

module.exports = router;
