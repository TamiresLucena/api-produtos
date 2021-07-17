API - Produtos

Inserção de Dados:
Json ou XML.

Consulta de Dados:
id, nome ou tags. 

//instalar node e postgres
https://nodejs.org/en/
https://www.postgresql.org/download/

//criar banco 
disponível em back/sql/dinamica.sql

//instalar dependências
pasta back: npm install

//rodar aplicação
pasta back/src: node app.js

//as chamadas devem ser realizadas da seguinte maneira:

POST
URL: http://localhost:3000/insere_xml/
body: conteúdo a ser inserido no formato XML.

POST
URL: http://localhost:3000/insere_json/
body: conteúdo a ser inserido no formato JSON.

GET
URL: http://localhost:3000/seleciona/?pesquisa=liso
body: 
parâmetro de pesquisa atribuído a "pesquisa" na própria URL.
