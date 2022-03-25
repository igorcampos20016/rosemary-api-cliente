RosemaryClinteApiTatoo

Projeto de fim do módulo 4 da Resilia Educação. O projeto consiste na criação deuma API REST que retorna informações do portifólio de um estúdio de tatuagem.


Iniciando o projeto
Abra o terminal (Linux/Mac) ou o PowerShell (Windows) e siga os passos abaixo.

Clone o repositório em sua máquina

git clone https://github.com/igorcampos20016/rosemary-api-cliente

Acesse a pasta criada

cd rosemary-api-cliente

Instale os pacotes

npm install

Para iniciar os projetos use o comando abaixo

npm run start

A porta padrão é a 3000.

Resumo das rotas
Segue abaixo um resumo das rotas da API. Em seguida terão mais informações sobre cada uma delas.

GET: URL_BASE/cliente
GET: URL_BASE/cliente/{id}
GET: URL_BASE/cliente/tag/{tag}
POST: URL_BASE/cliente
PUT: URL_BASE/cliente{id}
DELETE: URL_BASE/cliente/{id}
Retornando os Cliente

Retornando os Clientes
GET: URL_BASE/cliente

RESPOSTA

{
	{
	{
	"clientes": [
		{
			"ID": 3,
			"NOME": "Eduardo",
			"IDADE": "25",
			"GENERO": "Masculino",
			"CPF": "11987654232",
			"AUTORIZACAO": "Sim"
		},
		{
			"ID": 4,
			"NOME": "Thiago",
			"IDADE": "27",
			"GENERO": "Masculino",
			"CPF": "11987654253",
			"AUTORIZACAO": "Sim"
		},
		{
			"ID": 5,
			"NOME": "Yago",
			"IDADE": "28",
			"GENERO": "Masculino",
			"CPF": "11987654233",
			"AUTORIZACAO": "Sim"
		},
		{
			"ID": 7,
			"NOME": "Breno",
			"IDADE": "28",
			"GENERO": "Masculino",
			"CPF": "11987654232",
			"AUTORIZACAO": "Sim"
		}
	],
	"erro": false
}


Inserindo novo Cliente
POST: URL_BASE/cliente

Modelo a ser utilizado no body, no formato JSON:

{
	"NOME": "Breno",
	"IDADE": "28",
	"GENERO": "Masculino",
	"CPF": "11987654232",
	"AUTORIZACAO": "Sim"
}

Resposta:

{
    "mensagem": "Cliente Breno inserido com sucesso",
    "erro": false
}

Atualizando Cliente
PUT: URL_BASE/cliente/{id}

Modelo a ser utilizado no body, no formato JSON. Não é obrigatório conter todos atributos:

{
		"NOME": "Eduardo",
		"IDADE": "25",
		"GENERO": "Masculino",
		"CPF": "11987654232",
		"AUTORIZACAO": "Sim"
		
}


Resposta:

{
	"mensagem": "Cliente de id 3 atualizado com sucesso",
	"cliente": {
		"NOME": "Eduardo",
		"IDADE": "25",
		"GENERO": "Masculino",
		"CPF": "11987654232",
		"AUTORIZACAO": "Sim"
	},
	"erro": false
}

Deletando Cliente
DELETE: URL_BASE/cliente/{id} Resposta:

{
	"cliente": "Cliente de id 3 deletado com sucesso",
	"erro": false
}

Testes
Foi implementado um arquivo de testes para checar o funcionamento correto das rotas da API. Para isso foi utilizado a biblioteca Supertest com o framework Jest

npm run test.