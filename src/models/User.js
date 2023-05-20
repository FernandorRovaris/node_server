class User{

    constructor(
       id, nome, sobrenome, celular, email, senha, is_instituicao
    ){
        this.id = id,
        this.nome = nome,
        this.sobrenome = sobrenome
        this.celular = celular,
        this.email = email,
        this.senha = senha,
        this.is_instituicao = is_instituicao        
    }

}

module.exports = User;