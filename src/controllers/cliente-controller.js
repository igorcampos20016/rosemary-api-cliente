import Cliente from '../models/Cliente.js'
import ClienteDAO from '../DAO/ClienteDAO.js'

const clienteController = (app, bd)=>{
    const clienteDAO = new ClienteDAO(bd)

    app.get('/cliente', (req, res)=>{
        clienteDAO.pegaTodosClientes()
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.get('/cliente/genero/:genero', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const email = req.params.email

        // Pesquisa o usuario no banco de dados
        clienteDAO.pegaUmCliente(email)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.post('/cliente',(req, res)=>{
        // Recebe o corpo da requisição
        const body = req.body

        // Como temos validações na nossa model, usamos o try/catch
        // para pegar esse erro e enviar como mensagem para nosso cliente
        try {
            // cria uma instancia de Cliente com validação dos dados
            // apartir do corpo que foi recebido
            const novoCliente = new Cliente(body.nome, body.idade, body.genero, body.cpf , body.autorizacao)

            // insere a instância do cliente no banco de dados
            clienteDAO.insereCliente(novoCliente)
            .then((resposta)=>{
                res.json(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
            })

        } catch (error) {
            // Envia o erro, caso exista
            res.json({
                "msg": error.message,
                "erro": true
            })
        }  
    })

    app.delete('/cliente/id/:id', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const id = req.params.id

        // remove o cliente do banco de dados
        clienteDAO.deletaCliente(id)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.put('/cliente/id/:id', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const id = req.params.id

        // Pegando o corpo da requisição com as informações
        // que serão atualizados
        const body = req.body

        try {
            // utiliza a classe para validação dos dados recebidos
            const clienteAtualizado = new Cliente(body.nome, body.idade, body.genero, body.cpf , body.autorizacao)

            // Atualiza o usuario no banco de dados
            clienteDAO.atualizaCliente(id, clienteAtualizado)
            .then((resposta)=>{
                res.json(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
            })

        } catch (error) {
            // Envia o erro, caso exista
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

}

export default clienteController
