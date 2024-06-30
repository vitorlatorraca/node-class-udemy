const express = require('express');

const server = express();

// localhost:3000/curso
server.get('/curso',  (req, res) => {
    console.log('ACESSOU A ROTA');
})

server.listen(3000);