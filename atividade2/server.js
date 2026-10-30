const express = require ("express");
const app = express();
const PORT = 3000



app.get ("/",(req, res) => {
  res.send ("Bem-vindo a nossa página de cursos!");
});

app.get ('/cursos', (req, res) => {
  res.send ("Nossos cursos: desenvolvimento web, sql e javascripit");
});

app.get ('/professores', (req, res) => {
   res.send ("Esses são nosso professores: samuel, joaozinho e nicolas");
});

app.get ('/contatos', (req, res) => {
    res.send ("Contatos: 48991676767, 47983584958 e 48485849385");
});

app.use((req, res) =>{
    res.status(404).send ("Página não encontra")
});

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost: ${PORT}');
});
