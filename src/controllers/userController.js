const usersService = require("../service/usersServices")

const User = require("../models/user");

exports.findAll = async function (req,res){

    
    const users = await usersService.findAll();
    res.json(users);

}

exports.findById = async function (req,res){

    let _id = req.params.id;

    const users = await usersService.findById(_id);

    res.json(users);

}

exports.insert = async function (req, res) {
    
   let body = req.body;
   
   let user = new User(null, body.nome, 
                             body.sobrenome, 
                             body.celular, 
                             body.email, 
                             body.senha,
                             body.estadoId, 
                             body.cidadeId, 
                             body.cep, 
                             body.numero, 
                             body.endereco, 
                             body.is_instituicao);
   
   const users = await usersService.insert(user);

   res.json(users); 

}

exports.auth = async function (req, res) {
    
    console.log(req);

    let _email = req.query.email;
    let _senha = req.query.senha;
   
    const user = await usersService.findEmailSenha(_email, _senha);

    res.json(user); 

}


