const usersService = require("../service/usersServices")

const User = require("../models/User");
const ServerErro = require("../Error/serverError");

exports.findAll = async function (req,res){

    const users = await usersService.findAll();
    res.json(users);

}

exports.findById = async function (req,res){

    let _id = req.params.id;

    const users = await usersService.findById(_id);

    if(users == null || users == {}){
        throw new ServerErro(400, "Usuario não encontrado");
    }

    res.json(users);

}

exports.insert = async function (req, res) {
    
    let user = new User(req.body.name, req.body.email, req.body.senha, req.body.number_cel);
 
    console.log(user);

    const users = await usersService.insert(user);

    res.json(users); 

}


