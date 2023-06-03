const cidadeServices = require("../service/cidadeServices")

exports.findAll = async function (req,res){

    const cidade = await cidadeServices.findAll();
    res.json(cidade);

}

exports.findbyId = async function (req,res){

    console.log("aqui");

    let _id = req.params.id;

    const cidade = await cidadeServices.findbyId(_id);
    res.json(cidade);

}