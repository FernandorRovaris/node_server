const ServerErro = require("../Error/serverError");
const Campanha = require("../models/campanhas");
const campanhaRepositorie = require("../repositories/campanhasRepositorie");

exports.insert = async function (campanha) {

    const newobj =  await campanhaRepositorie.insert(campanha);
   
    console.log(newobj);

    const newCampanha = new Campanha(newobj.id,
                                newobj.users_id,
                                newobj.titulo,
                                newobj.categoria,
                                newobj.item_desc, 
                                newobj.item_meta, 
                                newobj.descricao
                            );
    return newCampanha;
    
}
