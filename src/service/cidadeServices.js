const ServerErro = require("../Error/serverError");
const Cidade = require("../models/cidades");
const Estados = require("../models/estados");
const cidadeRepositorie = require("../repositories/cidadeRepositorie");

exports.findAll = async function () {
    
    var result = await cidadeRepositorie.findAll();
    
    cidades = result.map(function(obj) {
        
        estado = new Estados(obj.id_est, obj.nome_est);
        cidade = new Cidade(obj.id_cit, obj.nome_cit, estado);
        
        return cidade;
    });

    return cidades;
}

exports.findbyId = async function(id){

    const result = await cidadeRepositorie.findbyId(id);

    console.log(result);

    if (result == null || result == {}){
        throw new ServerErro(404, "Estado não encontrado");
    }
    estado = new Estados(obj.id_est, obj.nome_est);
    cidade = new Cidade(obj.id_cit, obj.nome_cit, estado);

       return cidade;
    
}