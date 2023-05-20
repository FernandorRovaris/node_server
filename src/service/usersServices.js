const ServerErro = require("../Error/serverError");
const User = require("../models/User");
const userRepositorie = require("../repositories/userRepositorie");

exports.findAll = function () {
    
    return userRepositorie.findAll();

}

exports.findById = async function (id) {
    
    const obj = await userRepositorie.findById(id);

    if (obj == null || obj == {}){
        throw new ServerErro(400, "Usuario não encontrado");
    }

    const user = new User(obj.nome,obj.sobrenome,obj.celular,obj.email);

    return user;

}

exports.findEmail = async function (email){

    const obj = userRepositorie.findEmail(email);

    if (obj == null || obj == {}){
        throw new ServerErro(404, "Usuario não encontrado");
    }

    const user = new User(obj.nome,obj.sobrenome,obj.celular,obj.email);

    return user;

}


exports.insert = async function (user) {

    const  obj = await userRepositorie.findEmail(user.email);

    if (obj != null){
        throw new ServerErro(400, "Já existe usuario cadastrado com este email")
    }

    return userRepositorie.insert(user);
    
}