const fotoService = require("../service/fotoServices")

const Foto = require("../models/fotosCampanhas");


exports.insert = async function (req, res) {
    
   let body = req.body;
   
   console.log(body);

   let campanha = new Foto(body.campanhaId,
                           body.foto);
   
   const newcampanha = await fotoService.insert(campanha);

   res.json(newcampanha); 

}
