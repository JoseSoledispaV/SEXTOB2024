const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;


db.pc = require("../models/pc.models");
db.software = require("../models/software.models");
db.bitacora = require("../models/bitacora.models");
db.auditoria = require("../models/auditoria.models");


module.exports = db;