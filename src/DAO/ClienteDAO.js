class ClienteDAO{

    constructor(db){
        this.db = db
    }

    
    pegaTodosClientes = ()=>{
        
        // no controller
        return new Promise((resolve, reject) => {
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

    pegaUmCliente = (cpf)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM CLIENTES WHERE CPF = ?',
            cpf,
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
            
            this.db.run("INSERT INTO CLIENTES (NOME, IDADE, GENERO, CPF, AUTORIZACAO) VALUES (?, ?, ?, ?, ?)",
                novoCliente.NOME, novoCliente.IDADE, novoCliente.GENERO, novoCliente.CPF, novoCliente.AUTORIZACAO,
                (error)=>{
                if(error){
                    reject({
                        "mensagem": error,
                        "erro": true
                    })
                }else{
                    resolve({
                        "mensagem": `Cliente ${novoCliente.NOME} inserido com sucesso`,
                        "cliente": novoCliente,
                        "erro": false
                    })
                }
            })
        })

    }

    deletaCliente = (ID)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM CLIENTES WHERE ID = ?',
        ID,
            (error)=>{
                if(error){
                    console.log(error);
                    reject({
                        "mensagem": error,
                        "erro": true
                    })
                }else{
                    resolve({
                        "cliente": `Cliente de id ${ID} deletado com sucesso`,
                        "erro": false
                    })
                }
            })
        })
    }

    atualizaCliente = (ID, cliente)=>{
        return new Promise((resolve, reject)=>{
            this.db.run("UPDATE CLIENTES SET NOME = ?, IDADE = ?, GENERO = ?, CPF = ?, AUTORIZACAO = ? WHERE ID = ?",
            cliente.NOME, cliente.IDADE, cliente.GENERO, cliente.CPF, cliente.AUTORIZACAO,
            ID,
            (error)=>{
                if(error){
                    console.log(error);
                    reject({
                        "mensagem": error,
                        "erro": true
                    })
                }else{
                    resolve({
                        "mensagem": `Cliente de id ${ID} atualizado com sucesso`,
                        "cliente": cliente,
                        "erro": false
                    })
                }
            })
        })
    }

}

export default ClienteDAO