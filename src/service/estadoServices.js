const ServerErro = require("../Error/serverError");
const Cidade = require("../models/cidades");
const Estados = require("../models/estados");
const estadoRepositorie = require("../repositories/estadosRepositorie");

exports.findAll = async function () {
    
    var result = await estadoRepositorie.findAll();

    var id
    a = result.map(function(obj) {
        
        if (id != obj.id_est){
            estado = new Estados(obj.id_est, obj.nome_est);
            id = obj.id_est;
            return estado;
        }
        cidade = new Cidade(obj.id_cit, obj.nome_cit);
        estado.addCid(cidade);
        
    }).filter(function(lista) {
        return lista != null;
    });

    
      return a;
}

exports.findbyId = async function(id){

    const result = await estadoRepositorie.findbyId(id);

    if (result == null || result == {}){
        throw new ServerErro(404, "Estado não encontrado");
    }
       return Estados(result.id_est, result.nome_est);
    
}