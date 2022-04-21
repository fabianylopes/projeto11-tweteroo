import express, { json } from 'express';
import cors from 'cors';

const server = express();
server.use(json());
server.use(cors())

server.listen(5000, () => {
    console.log('Servidor iniciado em http://localhost:5000');
});

const users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    users.push(req.body);
    res.send('OK');
});
