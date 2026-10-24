const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Bem-vindo à Academia Dev! Confira nossos cursos e professores.");
});

app.get("/cursos", (req, res) => {
  res.send("Cursos oferecidos: Desenvolvimento Web, Node.js e Banco de Dados.");
});

app.get("/professores", (req, res) => {
  res.send("Professores: Ana Souza (Desenvolvimento Web), Bruno Lima (Node.js) e Carla Mendes (Banco de Dados).");
});

app.get("/contato", (req, res) => {
  res.send("Contato: contato@academiadev.com | Telefone: (48) 3333-0000.");
});

app.use((req, res) => {
  res.status(404).send("Página não encontrada.");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
