const express = require("express");
const app = express();
const PORT = 3000;

function obterNumeros(req, res) {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (req.params.a.trim() === "" || req.params.b.trim() === "" || !Number.isFinite(a) || !Number.isFinite(b)) {
    res.status(400).json({ erro: "Informe dois números válidos na URL." });
    return null;
  }

  return { a, b };
}

app.get("/somar/:a/:b", (req, res) => {
  const numeros = obterNumeros(req, res);
  if (!numeros) return;
  res.json({ operacao: "somar", a: numeros.a, b: numeros.b, resultado: numeros.a + numeros.b });
});

app.get("/subtrair/:a/:b", (req, res) => {
  const numeros = obterNumeros(req, res);
  if (!numeros) return;
  res.json({ operacao: "subtrair", a: numeros.a, b: numeros.b, resultado: numeros.a - numeros.b });
});

app.get("/multiplicar/:a/:b", (req, res) => {
  const numeros = obterNumeros(req, res);
  if (!numeros) return;
  res.json({ operacao: "multiplicar", a: numeros.a, b: numeros.b, resultado: numeros.a * numeros.b });
});

app.get("/dividir/:a/:b", (req, res) => {
  const numeros = obterNumeros(req, res);
  if (!numeros) return;
  if (numeros.b === 0) {
    return res.status(400).json({ erro: "Não é possível dividir por zero." });
  }
  res.json({ operacao: "dividir", a: numeros.a, b: numeros.b, resultado: numeros.a / numeros.b });
});

app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada." });
});

app.listen(PORT, () => {
  console.log(`API de calculadora rodando em http://localhost:${PORT}`);
});
