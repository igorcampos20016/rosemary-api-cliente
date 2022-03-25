class ClienteSchema{
    constructor(id, nome , idade , genero, cpf , autorizacao, clienteid){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.autorizacao= autorizacao;
        this.clienteid = clienteid;
    }
}

export default ClienteSchema