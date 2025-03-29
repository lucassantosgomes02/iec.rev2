const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Hello world!');
});

app.get('/api/test', (req, res) => {
  res.send({ message: 'Endpoint de teste na branch master com merge'});
});

app.get('/api/test-2', (req, res) => {
  res.send({ message: 'Branch master endpoint teste 2'});
});

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});

console.log ("Teste do Lucas");
console.log ("Teste de Lucas 02-03-1992");
console.log ("Erro Corrigido");


module.exports = app;
