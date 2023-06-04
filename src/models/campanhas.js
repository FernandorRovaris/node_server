class Campanha{

    constructor(
       id, users_id, titulo, categoria, item_desc, item_meta, descricao
    ){
        this.id = id,
        this.users_id = users_id,
        this.titulo = titulo
        this.categoria = categoria,
        this.item_desc = item_desc,
        this.item_meta = item_meta,
        this.descricao = descricao        
    }

}

module.exports = Campanha;