const database = require("../infra/database");

exports.insert = function (foto) {
    
    return database.oneOrNone("insert into doarse.fotos(camapanha_id, foto)  VALUES ($1, $2) returning *", [foto.campanhaId, foto.foto]); 

}

