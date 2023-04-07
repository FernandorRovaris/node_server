const database = require("../infra/database");

exports.findAll = function () {
        
    return database.query("Select * from doarse.users");
    
}

exports.findById = function (id) {
        
    return database.oneOrNone("Select *           " +
                              "from doarse.users u " +
                              "where u.id = $1", [id]);
    
}

exports.insert = function (User) {

    return database.one("insert into doarse.users(name,email,senha,number_cel) values ($1, $2, $3, $4) returning *",
                        [User.name, User.email, User.senha, User.number_cel]) 

    
}