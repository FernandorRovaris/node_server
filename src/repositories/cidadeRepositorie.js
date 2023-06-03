const database = require("../infra/database");

exports.findAll = function () {
        
    return database.query("select e.id as id_est,        " +
                          "       e.nome as nome_est,    " +
                          "       c.id as id_cit,        " +
                          "       c.nome as nome_cit     " +
                          "from doarse.cidades c         " +
                          "left join doarse.estados e on c.estado_id = e.id " +
                          "order by e.id, c.nome" );
    
}

exports.findbyId = function (id) {
        
    return database.oneOrNone("select e.id as id_est,        " +
                          "       e.nome as nome_est,    " +
                          "       c.id as id_cit,        " +
                          "       c.nome as nome_cit     " +
                          "from doarse.cidades c         " +
                          "left join doarse.estados e on c.estado_id = e.id " +
                          "where c.id = $1",[id] );
            
}