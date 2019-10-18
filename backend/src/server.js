const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

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

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333); // Porta solicitada