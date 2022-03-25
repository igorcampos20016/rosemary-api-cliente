import Cliente from '../models/Cliente.js'
import ClienteDAO from '../DAO/ClienteDAO.js'

const clienteController = (app, bd)=>{
    const clienteDAO = new ClienteDAO(bd)

    app.get('/cliente', (req, res)=>{
        clienteDAO.pegaTodosClientes()
        .then((resposta)=>{
            res.status(200).json(resposta)
        })
        .catch((erro)=>{
            res.status(400).json(erro)
        })
    })

    app.get('/cliente/cpf/:cpf', (req, res)=>{
        
        const cpf = req.params.cpf
        // Pesquisa o cliente no banco de dados
        clienteDAO.pegaUmCliente(Cliente)
        .then((resposta)=>{
            res.status(200).json(resposta)
        })
        .catch((erro)=>{
            res.status(400).json(erro)
        })
    })

    app.post('/cliente',(req, res)=>{
      
        const body = req.body

        
        try {
           
            const novoCliente = new Cliente(body.NOME, body.IDADE, body.GENERO, body.CPF, body.AUTORIZACAO)

          
            clienteDAO.insereCliente(novoCliente)
            .then((resposta)=>{
                res.status(201).json(resposta)
            })
            .catch((erro)=>{
                res.status(400).json(erro)
            })

        } catch (error) {
            // Envia o erro, caso exista
            res.status(400).json({
                "msg": error,
                "erro": true
            })
        }  
    })
    app.put('/cliente/id/:ID', async (req, res) => {
            const ID = req.params.ID
            const body = req.body

        try {
         const clienteAtualizado = new Cliente(body.NOME, body.IDADE, body.GENERO, body.CPF, body.AUTORIZACAO)
            clienteDAO.atualizaCliente(ID, clienteAtualizado)
            .then((resposta)=>{
                res.status(200).json(resposta)
            })
            .catch((erro)=>{
                res.status(400).
                json(erro)
            })
        } catch (error) {
            // Envia o erro, caso exista
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/cliente/id/:ID', async(req, res) =>{
        const ID = req.params.ID;
        try{
            const deletaCliente = await clienteDAO.deletaCliente(ID)
            console.log(deletaCliente);
            res.status(200).json(deletaCliente)
        }
        catch(error){
            res.status(400).json(error.message)
    
        }
    })


}

export default clienteController
