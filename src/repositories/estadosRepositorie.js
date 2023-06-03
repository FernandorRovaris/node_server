const database = require("../infra/database");

exports.findAll = function () {
        
    return database.query("select e.id as id_est,        " +
                          "       e.nome as nome_est,    " +
                          "       c.id as id_cit,        " +
                          "       c.nome as nome_cit     " +
                          "from doarse.estados e         " +
                          "left join doarse.cidades c on c.estado_id = e.id " +
                          "order by e.id, c.nome" );
    
}

exports.findAll = function (id) {
        
    return database.query("select e.id as id_est,        " +
                          "       e.nome as nome_est,    " +
                          "from doarse.estados e         " +
                          "where e.id = $1",[id] );
    
}