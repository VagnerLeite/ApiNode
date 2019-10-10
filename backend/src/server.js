const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

// Conexão com o banco de dados MongoDb Atraves do Mongodb Atlas
mongoose.connect('mongodb+srv://apinode:apinode@cluster0-1xdzd.mongodb.net/apinode?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Métodos Http Padrão. GET, POST, PUT, DELETE

// req.query  = Aacessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação e edição)

app.use(express.json());
app.use(routes);

app.listen(3333); // Porta solicitada