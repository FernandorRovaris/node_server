class Campanha{

     listFotos = [];

    constructor(
       id, users_id, titulo, categoria, item_desc, item_meta, descricao, is_coleta
    ){
        this.id = id,
        this.users_id = users_id,
        this.titulo = titulo
        this.categoria = categoria,
        this.item_desc = item_desc,
        this.item_meta = item_meta,
        this.descricao = descricao,
        this.is_coleta = is_coleta
    }

    addfoto(elemento) {
        this.listFotos.push(elemento);
    };

}

module.exports = Campanha;