const userRepositorie = require("../repositories/userRepositorie");

exports.findAll = function () {
    
    return userRepositorie.findAll();

}

exports.insert = function (User) {

    return userRepositorie.insert(User);
    
}