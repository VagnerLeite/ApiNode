const express = require('express');

const app = express();

// Métodos Http Padrão. GET, POST, PUT, DELETE

app.get('/', (req, res) => {
    return res.json({ message: "Hello World" });
});

app.listen(3333);