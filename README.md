Como executar o projeto

Após clonar o repositório seguir os seguintes passos:
1. criar arquivo .env dentro de Back/src

2. adicionar as variáveis no arquivo .env: PORT, DATABASE_DEFAULT_NAME, DATABASE_NAME e DATABASE_URL
    Exemplo: PORT=3000
             DATABASE_DEFAULT_NAME=postgres
             DATABASE_NAME=coleta
             DATABASE_URL=postgres://postgres:1234@localhost:5432
3. executar o comando "npm i" dentro de Back/src
4. executar o comando "npm i" dentro de Front/coleta-seletiva
5. executar o comando "docker-compose up" dentro da pasta Back
6. executar o comando "node pontosColeta.js" dentro de Back/src
7. executar o comando "node server.js" dentro de Back/src
8. executar o comando "npx expo start" dentro de Front/coleta-seletiva
9. Agora só ler o QRCode
