const ServerErro = require("../Error/serverError");
const User = require("../models/user");
const userRepositorie = require("../repositories/userRepositorie");

exports.findAll = function () {
    console.log("aqui");
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

    const obj = await userRepositorie.findEmail(user.email);

    if (obj != null){
        throw new ServerErro(400, "Já existe usuario cadastrado com este email")
    }
   
    const newobj =  await userRepositorie.insert(user);

    const newUser = new User(newobj.id,newobj.nome,newobj.sobrenome,newobj.celular,newobj.email, null, newobj.is_instituicao);

    return newUser;
    
}

exports.findEmailSenha = async function (email, senha){

    const obj = await userRepositorie.findEmailSenha(email, senha);

    if (obj == null || obj == {}){
        throw new ServerErro(404, "Usuario não encontrado");
    }

    const user = new User(obj.id, obj.nome,obj.sobrenome,obj.celular,obj.email, null, obj.is_instituicao);

    return user;

}