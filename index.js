import express, { json } from 'express';
import cors from 'cors';

const server = express();
server.use(json());
server.use(cors());

const users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    const body = req.body;
    
    if(body.username === '' || body.avatar === ''){
        res.status(400).send('Todos os campos são obrigatórios!');
        return;
    }

    users.push(body);
    res.sendStatus(201);
});

server.post('/tweets', (req, res) => {
    const username = req.headers.user;
    const tweet = req.body.tweet;
    
    if(username === '' || tweet === ''){
        res.status(400).send('Todos os campos são obrigatórios!');
        return;
    }
    
    const avatar = users.find(user => user.username === username).avatar;
    tweets.push({username, tweet, avatar});

    res.sendStatus(201);
});

server.get('/tweets', (req, res) => {
    const lastTweets = [];

    for(let i = tweets.length - 1; i >= tweets.length - 10; i--){
        if(tweets[i]){
            lastTweets.push(tweets[i]);
        }    
    }

    res.send(lastTweets);
});

server.get('/tweets/:user', (req, res) => {
    const userId = req.params.user;
    const userTweets = tweets.filter(tweet => tweet.username === userId);

    res.send(userTweets);
});

server.listen(5000, () => {
    console.log('Running on http://localhost:5000');
});
