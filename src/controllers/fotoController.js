const fotoService = require("../service/fotoServices")

const Foto = require("../models/fotosCampanhas");


exports.insert = async function (req, res) {
    
   let body = req.body;
   
   let campanha = new Foto(req.params.id,
                           body.foto);
   
   const newcampanha = await fotoService.insert(campanha);

   res.json(newcampanha); 

}
