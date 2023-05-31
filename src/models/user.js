class User{

    constructor(
       id, nome, sobrenome, celular, email, senha, estadoId, cidadeId, cep, numero, endereco, isInstituicao, fileImage
    ){
        this.id = id,
        this.nome = nome,
        this.sobrenome = sobrenome
        this.celular = celular,
        this.email = email,
        this.senha = senha,
        this.estadoId = estadoId,
        this.cidadeId = cidadeId,
        this.cep = cep,
        this.numero = numero,
        this. endereco = endereco,
        this.isInstituicao = isInstituicao,
        this.fileImage = fileImage        
    }

}

module.exports = User;