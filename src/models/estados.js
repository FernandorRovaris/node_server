class Estados{
    id;
    nome;
    listCidade = []

    constructor(
       id, nome, 
       ){
        this.id = id,
        this.nome = nome
    };

    addCid(elemento) {
        this.listCidade.push(elemento);
    };

}

module.exports = Estados;