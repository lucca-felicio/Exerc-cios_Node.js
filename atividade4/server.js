import express from "express";
const app = express();
const PORT = 3000;



app.get("/calculadora", (req, res) => {
    res.send("Olá essa é a calculadora!")
});

app.get("/somar/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    res.json({resultado: num1 + num2});  
});

app.get("/subtrair/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    res.json({resultado: num1 - num2});  
});

app.get("/multiplicar/:num1/:num2", (req, res) => {
       const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    res.json({resultado: num1 * num2});  
});

app.get("/dividir/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    res.json({resultado: num1 / num2});      
});


app.listen (PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});