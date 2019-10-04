const express = require('express');

const app = express();

// Métodos Http Padrão. GET, POST, PUT, DELETE

// req.query  = Aacessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação e edição)

app.use(express.json());

app.post('/users', (req, res) => {
    return res.json(req.body);
});

app.listen(3333);