const ServerErro = require("../Error/serverError");
const User = require("../models/user");
const userRepositorie = require("../repositories/userRepositorie");

exports.findAll = function () {
    
    return userRepositorie.findAll();

}

exports.findById = async function (id) {
    
    const newobj = await userRepositorie.findById(id);

    if (newobj == null || newobj == {}){
        throw new ServerErro(400, "Usuario não encontrado");
    }
    
    
    let imagebase64;

    if (newobj.fileimage != null) {
        const imagefile = Buffer.from(newobj.fileimage).toString('base64');

        const buffer = Buffer.from(imagefile, 'base64');
    
        imagebase64 = buffer.toString('utf-8')
    }
    
    const user = new User(newobj.id,
                          newobj.nome,
                          newobj.sobrenome,
                          newobj.celular,
                          newobj.email, 
                          null, 
                          newobj.estadoid, 
                          newobj.cidadeid, 
                          newobj.cep,
                          newobj.numero,
                          newobj.endereco, 
                          newobj.is_instituicao,
                          imagebase64);

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

   /* const obj = await userRepositorie.findEmail(user.email);

    if (obj != null){
        throw new ServerErro(400, "Já existe usuario cadastrado com este email")
    }    
    
    const newobj =  await userRepositorie.insert(user);

    let imagebase64;

    if (newobj.fileimage != null) {
        const imagefile = Buffer.from(newobj.fileimage).toString('base64');

        const buffer = Buffer.from(imagefile, 'base64');
    
        imagebase64 = buffer.toString('utf-8')
    }

    const newUser = new User(newobj.id,
                            newobj.nome,
                            newobj.sobrenome,
                            newobj.celular,
                            newobj.email, 
                            null, 
                            newobj.estadoid, 
                            newobj.cidadeid, 
                            newobj.cep,
                            newobj.numero,
                            newobj.endereco, 
                            newobj.is_instituicao,
                            imagebase64);*/
    return "teste" //newUser;
    
}

exports.findEmailSenha = async function (email, senha){

    const newobj = await userRepositorie.findEmailSenha(email, senha);

    if (newobj == null || newobj == {}){
        throw new ServerErro(404, "Usuario não encontrado");
    }

    let imagebase64;

    if (newobj.fileimage != null) {
        const imagefile = Buffer.from(newobj.fileimage).toString('base64');

        const buffer = Buffer.from(imagefile, 'base64');
    
        imagebase64 = buffer.toString('utf-8')
    }

    const user = new  User(newobj.id,
                            newobj.nome,
                            newobj.sobrenome,
                            newobj.celular,
                            newobj.email, 
                            null, 
                            newobj.estadoid, 
                            newobj.cidadeid, 
                            newobj.cep,
                            newobj.numero,
                            newobj.endereco, 
                            newobj.is_instituicao,
                            imagebase64);

    return user;

}