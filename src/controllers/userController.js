const usersService = require("../service/usersServices")

const User = require("../models/User");
const { json } = require("body-parser");


exports.findAll = async function (req,res){
    
    const users = await usersService.findAll();
    res.json(users);

}

exports.insert = async function (req, res) {
    
    let user = new User(req.body.name, req.body.email, req.body.senha, req.body.number_cel);
 
    console.log(user);

    const users = await usersService.insert(user);

    res.json(users); 

}


