const ServerErro = require("../Error/serverError");
const Campanha = require("../models/campanhas");
const FotosCampanha = require("../models/fotosCampanhas");
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
                                newobj.descricao,
                                newobj.is_coleta
                            );
    return newCampanha;
    
}

exports.findAll = async function(){

    const result = await campanhaRepositorie.findAll();

    var id
    a = result.map(function(obj) {
        
        if (id != obj.id_est){
            campanha = new Campanha(obj.id, obj.users_id, obj.titulo, obj.categoria, obj.item_desc, obj.item_meta, obj.descricao, obj.is_coleta);
            id = obj.id;
            return campanha;
        }
        foto = new FotosCampanha(obj.id_foto, obj.id, obj.foto);
        campanha.addfoto(foto);
        
    }).filter(function(lista) {
        return lista != null;
    });

    
      return a;

}
