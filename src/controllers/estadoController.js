const estadoService = require("../service/estadoServices")

exports.findAll = async function (req,res){

    const estado = await estadoService.findAll();
    res.json(estado);

}

exports.findbyID = async function (req,res){

    let _id = req.params.id;

    const estado = await estadoService.findbyID(_id);
    res.json(estado);

}