import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

const tarefas = [
    {id:1, nome: "Estudar para o passe"},
    {id:2, nome: "Limpar o PC"},
    {id:3, nome: "Praticar express"}
];
 
app.get ("/tarefas", (req, res) => {
    res.json(tarefas);
});

app.get ("/tarefas/:id", (req, res) => {
    const id = Number(req.params.id);

    const tarefa = tarefas.find((item) => item.id === id);

    if (tarefa === undefined) {
        res.status(404).json ({mensagem: "tarefa não encontrada"});
    }

    else {
        res.json(tarefa);
    }

});



app.listen (PORT, () => {
    console.log (`Servidor rodando em http://localhost:${PORT}`)
});
