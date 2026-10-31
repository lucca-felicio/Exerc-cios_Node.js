const express = require("express");
const app = express();
const PORT = 3000;



const produtos =[
    {id: 1, nome: "Teclado", preco: 200.00},
    {id: 2, nome: "Mouse", preco: 120.00},
    {id:3, nome: "Headset", preco: 150.00},
    {id:4, nome: "Mousepad", preco: 70.00},
    {id:5, nome: "Monitor", preco: 800.00}
];

app.get("/produtos",(req, res) => {
    res.json(produtos);
});


app.get("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find((item) => item.id === id);

    if (produto === undefined) {
        res.status(404).json({mensagem: "Produto não encontrado"});
    } 
    else {
        res.json(produto);
    }

});


app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:3000 ${PORT}');
});