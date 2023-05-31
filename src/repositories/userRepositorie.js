const database = require("../infra/database");

exports.findAll = function () {
    console.log("1");
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

exports.insert = function (user) {
    console.log(user);
    return database.oneOrNone("insert into doarse.users(nome,sobrenome,celular,email,senha,estadoId,cidadeId,cep,numero,endereco,is_instituicao) values ($1, $2, $3, $4, $5, $6, $7, $8, $9 $10 $11) returning *",
                        [user.nome, user.sobrenome, user.celular, user.email, user.senha, user.estadoId, user.cidadeId, user.cep, user.numero, user.endereco, user.is_instituicao]) 

    
}

exports.findEmailSenha = function (email, senha) {
      
    return database.oneOrNone("Select *               " +
                              "from doarse.users u    " +
                              "where u.email = $1 and " +
                               "     u.senha = $2", [email, senha]);
    
}