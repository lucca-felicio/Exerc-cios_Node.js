const express = require("express");
const app = express();
const PORT = 3000;

const produtos = [
  { id: 1, nome: "Teclado mecânico", preco: 199.9 },
  { id: 2, nome: "Mouse gamer", preco: 129.9 },
  { id: 3, nome: "Headset", preco: 249.9 },
  { id: 4, nome: "Mousepad", preco: 59.9 },
  { id: 5, nome: "Webcam", preco: 179.9 }
];

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(404).json({ erro: "Produto não encontrado." });
  }

  const produto = produtos.find((item) => item.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado." });
  }

  res.json(produto);
});

app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada." });
});

app.listen(PORT, () => {
  console.log(`API de produtos rodando em http://localhost:${PORT}`);
});
