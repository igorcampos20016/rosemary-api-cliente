// importa o framework que faz a requisição
// para testar nossa requisição
import request from 'supertest'
// importa o app para ter acesso as rotas
import app from '../app.js'

// O describe serve para agrupar varios test e deixar mais
// organizado
describe('GET /Cliente', ()=>{
    test('Se o status é 200', ()=>{
        // Faz uma requisição para rota get /usuarios
        // como o retorno é uma promise, precisamos
        // executar com .then. A resposta vem com 
        // todos os itens de uma requisição HTTP
        // status, header, body.
        // Caso queira saber o que tem, da um console.log
        return request(app).get('/cliente')
        .then((response)=>{
            console.log(response)
            expect(response.statusCode).toBe(200)
        })
    })
})

describe('POST /clientes', ()=>{
    test('Se o body existe', ()=>{
        // No teste de uma rota post é possivel enviar um body
        // com o .send().
        return request(app).post('/cliente')
        .send({
            "nome" : "Thiago",
            "idade" : "26",
            "genero" : "masculino",
            "cpf": 18823443454,
            "autorizacao": "sim"
        })
        .then((response)=>{
            console.log(response.body)
            expect(response.statusCode).toBeTruthy()

        })
    })

    test('Erro com cpf invalido', ()=>{
        // No teste de uma rota post é possivel enviar um body
        // com o .send().
        return request(app).post('/cliente')
        .send({
            "nome" : "Yago",
            "idade" : "26",
            "genero" : "masculino",
            "cpf": "1233454343",
            "autorizacao": "sim"
        })
        .then((response)=>{
            console.log(response.body)
            expect(response.statusCode).toBeTruthy()
        })
    })

})