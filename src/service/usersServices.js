const userRepositorie = require("../repositories/userRepositorie");

exports.findAll = function () {
    
    return userRepositorie.findAll();

}

exports.findById = function (id) {
    
    return userRepositorie.findById(id);

}


exports.insert = function (User) {

    return userRepositorie.insert(User);
    
}