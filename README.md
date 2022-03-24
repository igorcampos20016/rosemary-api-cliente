RosemaryClinteApiTatoo

Projeto de fim do módulo 4 da Resilia Educação. O projeto consiste na criação deuma API REST que retorna informações do portifólio de um estúdio de tatuagem.


Iniciando o projeto
Abra o terminal (Linux/Mac) ou o PowerShell (Windows) e siga os passos abaixo.

Clone o repositório em sua máquina

git clone https://github.com/igorcampos20016/rosemary-api-cliente

Acesse a pasta criada

cd EstudioTattooAPI

Instale os pacotes

npm install

Para iniciar os projetos use o comando abaixo

npm run start

A porta padrão é a 3000. Caso queira alterá-la, procure a linha const port = process.env.PORT || 3000 no arquivo /server.js e altere o número 3003 para sua porta de preferência.

Resumo das rotas
Segue abaixo um resumo das rotas da API. Em seguida terão mais informações sobre cada uma delas.

GET: URL_BASE/cliente
GET: URL_BASE/cliente/{id}
GET: URL_BASE/cliente/tag/{tag}
POST: URL_BASE/cliente
PUT: URL_BASE/cliente{id}
DELETE: URL_BASE/clieten/{id}
Retornando os Portifólios