const database = require("../infra/database");

exports.findAll = function () {
        
    return database.query("Select * from doarse.users");
    
}

exports.findById = function (id) {
        
    return database.oneOrNone("Select *           " +
                              "from doarse.users u " +
                              "where u.id = $1", [id]);
    
}

exports.findEmail = function (email) {
        
    return database.oneOrNone("Select *           " +
                              "from doarse.users u " +
                              "where u.email = $1", [email]);
    
}

exports.insert = function (User) {

    return database.oneOrNone("insert into doarse.users(nome,sobrenome,celular,email,senha,is_instituicao) values ($1, $2, $3, $4, $5, $6) returning *",
                        [User.nome, User.sobrenome, User.celular, User.email, User.senha, User.is_instituicao]) 

    
}

exports.findEmailSenha = function (email, senha) {
      
    console.log(email, senha);

    return database.one("Select *               " +
                              "from doarse.users u    " +
                              "where u.email = $1 and " +
                               "     u.senha = $2", [email, senha]);
    
}