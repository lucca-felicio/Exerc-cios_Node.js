const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Bem-vindo à TechNova!");
});

app.get("/sobre", (req, res) => {
  res.send(
    "A TechNova é uma empresa fictícia de tecnologia especializada em desenvolvimento de software."
  );
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});