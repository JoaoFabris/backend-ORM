// src/server.js

const app = require('./app');

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});