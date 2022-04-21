import express from 'express';

const server = express();

server.listen(5000, () => {
    console.log('Servidor iniciado em http://localhost:5000');
});
