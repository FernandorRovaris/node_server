const database = require("../infra/database");

exports.insert = function (foto) {
      
    return database.one("insert into doarse.fotos(campanha_id, foto)  VALUES ($1, $2)", [foto.campanhaId, foto.foto]); 

}

