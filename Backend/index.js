const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));


//recuperando os registros
app.get('/', (req, res) =>{
    
    res.json({ mensagem: 'GET ALL' });
});


//Criar registro apenas com o ID
app.get('/:id', (req, res) => {
    
    const id = req.params.id;
    res.json({ mensagem: `PEGAR SOMENTE O REGISTRO COM O ID: ${id}` });
});

//Criando um registro
app.post('/', (req, res) => {

    const body = req.body

    res.json(body);
});

//Atualizar registro com o ID
app.put('/:id', (req, res) => {

    const id = req.params.id;
    res.json({ mensagem: `ATUALIZAR O REGISTRO COM O ID: ${id}` });
});


//Deletar registro com o ID
app.delete('/:id', (req, res) => {

    const id = req.params.id;
    res.json({ mensagem: `DELETANDO O REGISTRO COM O ${id}`});
});

app.listen(3000, () => {
    console.log('Meu Servidor está Funcionando');
});


