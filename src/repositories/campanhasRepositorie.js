const database = require("../infra/database");


exports.insert = function (campanha) {
    console.log(campanha);
    return database.oneOrNone("insert into doarse.campanhas(users_id, titulo, categoria, item_desc, item_meta, descricao, is_coleta) values ($1, $2, $3, $4, $5, $6, $7) returning *",
                        [campanha.users_id, campanha.titulo, campanha.categoria, campanha.item_desc, campanha.item_meta, campanha.descricao, campanha.is_coleta]); 

    
}

