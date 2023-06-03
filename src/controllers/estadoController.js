const estadoService = require("../service/estadoServices")

exports.findAll = async function (req,res){

    const estado = await estadoService.findAll();
    res.json(estado);

}

exports.findbyId = async function (req,res){

    let _id = req.params.id;

    const estado = await estadoService.findbyId(_id);
    res.json(estado);

}