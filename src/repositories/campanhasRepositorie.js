const database = require("../infra/database");


exports.insert = function (campanha) {
    console.log(campanha);
    return database.oneOrNone("insert into doarse.campanhas(users_id, titulo, categoria, item_desc, item_meta, descricao, is_coleta) values ($1, $2, $3, $4, $5, $6, $7) returning *",
                        [campanha.users_id, campanha.titulo, campanha.categoria, campanha.item_desc, campanha.item_meta, campanha.descricao, campanha.is_coleta]); 

    
}

exports.findAll = function (){

    return database.query("Select c.id, c.users_id, c.titulo, c.categoria, c.item_desc, c.item_meta, c.descricao, c.is_coleta, f.id as id_foto, f.foto "+
                          "from doarse.campanhas c                          "+
                          "left join doarse.fotos f on f.campanha_id = c.id "+
                          " where c.id = 28 "+
                          "order by c.id ,f.id; ");

}
