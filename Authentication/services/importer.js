const convert = require('xml-js');
var Admin = require('../models/admin');
var User = require('../models/user');

const importFile = async (req, res, next) => {

    var jsonConverted = JSON.parse(convert.xml2json(req.file.buffer.toString(), { compact: true, spaces: 4, alwaysChildren: true }));
s 
} 

module.exports.importFile = importFile;