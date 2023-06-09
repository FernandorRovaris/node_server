const campanhaService = require("../service/campanhasServices")

const Campanha = require("../models/campanhas");


exports.insert = async function (req, res) {
    
   let body = req.body;
   
   console.log(body);

   let campanha = new Campanha( body.id,
                                body.users_id,
                                body.titulo,
                                body.categoria,
                                body.item_desc, 
                                body.item_meta, 
                                body.descricao,
                                body.is_coleta);
   
   const newcampanha = await campanhaService.insert(campanha);

   res.json(newcampanha); 

}

exports.findAll =  async function (req, res){

   const campanhas = await campanhaService.findAll();
   
   res.json(campanhas)

}
