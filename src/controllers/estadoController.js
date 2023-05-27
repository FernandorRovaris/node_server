const estadoService = require("../service/estadoServices")

exports.findAll = async function (req,res){

    const estado = await estadoService.findAll();
    res.json(estado);

}