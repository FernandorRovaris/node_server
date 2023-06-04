const fotoService = require("../service/fotoServices")

const Foto = require("../models/fotosCampanhas");


exports.insert = async function (req, res) {
   
   let body = req.body;
   
   const newcampanha = await fotoService.insert(body.fotos);

   res.json(newcampanha); 

}
