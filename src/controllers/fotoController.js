const fotoService = require("../service/fotoServices")

const Foto = require("../models/fotosCampanhas");


exports.insert = async function (req, res) {
   
   console.log(req.params.id);
   
   let body = req.body;
   
   let campanha = new Foto(null,
                           req.params.id,
                           body.foto);
   
   const newcampanha = await fotoService.insert(campanha);

   res.json(newcampanha); 

}
