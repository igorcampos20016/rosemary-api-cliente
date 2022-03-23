// A classe DAO é responsável por acessar nosso banco de dados
// Cada arquivo DAO é responsável por uma entidade

class ClienteDAO{

    constructor(db){
        this.db = db
    }

    // Metodo responsável pelo acesso aos bancos de dados
    // cada metodo será responsável por uma query de acordo com
    // o que ele deve retornar
    pegaTodosClientes = ()=>{
        // Como estamos tratando de acesso a banco de dados, o processo é
        // assíncrono, por isso precisamos trabalhar com promises.
        // O método ira retornar a promise, que será excutada (com .then e .catch)
        // no controller
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM CLIENTES', (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "clientes": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    pegaUmCliente = (cliente)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM CLIENTES WHERE EMAIL = ?',
            genero,
            (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "cliente": rows,
                        "erro": false
                    })
                }
            })
        })

    }

    insereCliente = (novoCliente) =>{

        return new Promise((resolve, reject)=>{
            // Query com ? para evitar SQL Injection
            // NUNCA DEVEMOS USAR COM TEMPLATE ST/RING
            // Nós inserimos os dados a serem substituidos depois da query
            // Ou separado por vírgula (QUERY, a,b,c, callback)
            // Ou em um array (QUERY, [a,b,c] , callback)
            this.db.run("INSERT INTO CLIENTES(NOME, IDADE, GENERO, CPF, AUTORIZACAO) VALUES (?, ?, ?)",
                novoCliente.nome, novoCliente.idade, novoCliente.genero, novo.Cliente.cpf, novo.Cliente.autorizacao,
                (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "mensagem": `Cliente ${novoCliente.nome} inserido com sucesso`,
                        "cliente": novoCliente,
                        "erro": false
                    })
                }
            })
        })

    }

    deletaCliente = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM CLIENTE WHERE ID = ?',
            id,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "cliente": `Cliente de id ${id} deletado com sucesso`,
                        "erro": false
                    })
                }
            })
        })
    }

    atualizaCliente = (id, cliente)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE CLIENTE SET NOME = ?, EMAIL = ?, SENHA = ? WHERE ID = ?',
            cliente.nome, cliente.email, cliente.senha,
            id,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "mensagem": `Cliente de id ${id} atualizado com sucesso`,
                        "cliente": cliente,
                        "erro": false
                    })
                }
            })
        })
    }

}

export default ClienteDAO