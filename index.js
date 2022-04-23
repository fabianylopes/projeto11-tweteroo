import express, { json } from 'express';
import cors from 'cors';

const server = express();
server.use(json());
server.use(cors());

const users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    const body = req.body;
    users.push(body);
    
    res.send('OK');
});

server.post('/tweets', (req, res) => {
    const tweet = req.body;

    const userInfo = users.find(user => user.username === tweet.username);
    tweets.push({...tweet, avatar: userInfo.avatar});

    res.send('OK');
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

server.listen(5000, () => {
    console.log('Running on http://localhost:5000');
});
