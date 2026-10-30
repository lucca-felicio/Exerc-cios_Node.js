const express = require("express");
const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
 res.send("Hello World!");
});


app.get("/sobre", (req, res) => {
 res.send(
   "rodando o servidor com express, node e npm"
 );
});


app.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
});
