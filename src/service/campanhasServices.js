const ServerErro = require("../Error/serverError");
const Campanha = require("../models/campanhas");
const FotosCampanha = require("../models/fotosCampanhas");
const User = require("../models/user");
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
        
        let imagebase64;

        if (obj.foto != null) {
            const imagefile = Buffer.from(obj.foto).toString('base64');

            const buffer = Buffer.from(imagefile, 'base64');
        
            imagebase64 = buffer.toString('utf-8');

            foto = new FotosCampanha(obj.id_foto, obj.id, imagebase64);
        }
       
        if (id != obj.id){
            id = obj.id;
            user = new User(obj.user_id,
                obj.nome,
                obj.sobrenome,
                obj.celular,
                obj.email, 
                null, 
                obj.estadoid, 
                obj.cidadeid, 
                obj.cep,
                obj.numero,
                obj.endereco, 
                obj.is_instituicao,
                null);
            campanha = new Campanha(obj.id, obj.users_id, obj.titulo, obj.categoria, obj.item_desc, obj.item_meta, obj.descricao, obj.is_coleta,user);
            campanha.addfoto(foto);
            return campanha;
        }else{
            campanha.addfoto(foto);
        }
        
    }).filter(function(lista) {
        return lista != null;
    });
    
    return a;

}
