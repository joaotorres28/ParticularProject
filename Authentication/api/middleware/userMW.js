const Joi = require("joi");
var User = require("../../models/user");
const bcrypt = require("bcryptjs");
var repository = require("../../repository");
const jwt = require("jsonwebtoken");
var config = require("../../config");
var handlebars = require("handlebars");
var nodemailer = require("nodemailer");
var fs = require("fs");

const registerValidation = (reqBodyData) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(reqBodyData);
};

const loginValidation = (reqBody) => {
  const schema = Joi.object({
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(reqBody);
};

const attachAllUsers = async (req, res, next) => {
  req.allUsers = await repository.findAllUsers();
  return next();
};

const deleteUserAccount = async (req, res, next) => {
  User.deleteOne({ _id: req.params.user_id }, function (err, user) {
      if (err) {
          return next(err);
      }
      return next();
  });
};

const sendEmail = (email) => {

    fs.readFile(__dirname + "/emailContent.html", { encoding: "utf-8" }, function (error, html) {

        var template = handlebars.compile(html);
        var replacements = { username: "LAPR5-G1"};
        var htmlToSend = template(replacements);
    
        var transporter = nodemailer.createTransport({
            service: config.service,
            auth: {
                user: config.source,
                pass: config.acess_key,
            }
        });
        var mailOptions = {
            from: config.source,
            to: email,
            subject: config.subject,
            html: htmlToSend,
        };
    
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
    }
  );
};

const registerUser = async (req, res, next) => {
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).send("This e-mail is already registred.");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  await sendEmail(req.body.email);

  repository.registerNewUser(user);
  return next();
};

const login = async (req, res, next) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("E-mail not found");
  }

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send("Invalid password.");
  }

  //Create and assign a json web token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
};

module.exports.registerUser = registerUser;
module.exports.login = login;
module.exports.attachAllUsers = attachAllUsers;
module.exports.deleteUserAccount = deleteUserAccount;
