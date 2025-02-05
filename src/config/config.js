require('dotenv').config(); // Garante que o .env seja lido

const config = {
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "senha",
  database: process.env.MYSQL_DATABASE || "orm_association",
  host: process.env.MYSQL_HOST || "127.0.0.1",
  dialect: 'mysql',
};

console.log("Configuração do Banco:", config); // Verifica se as variáveis estão carregadas

module.exports = {
  development: config,
  test: config,
  production: config,
};
