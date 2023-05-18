const usersService = require("../service/usersServices")

const User = require("../models/User");
const ServerErro = require("../Error/serverError");
const { json } = require("body-parser");

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
    
   let user = new User(body.nome, body.sobrenome, body.celular, body.email, body.senha);
   
   const users = await usersService.insert(user);

    print(req.body);

    res.json(users); 

}


