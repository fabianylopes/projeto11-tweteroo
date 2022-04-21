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

server.post('/tweets', (req, res) => {
    const tweet = req.body;
    const user = users.find(user => user.username === tweet.username);
    tweets.push({...tweet, avatar: user.avatar});
    res.send('OK');
});

server.get('/tweets', (req, res) => {
    res.send(tweets);
});
