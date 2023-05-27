const ServerErro = require("../Error/serverError");
const Estados = require("../models/estados");
const estadoRepositorie = require("../repositories/estadosRepositorie");

exports.findAll = function () {
    
    return estadoRepositorie.findAll();

}