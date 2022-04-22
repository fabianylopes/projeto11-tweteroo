import express, { json } from 'express';
import cors from 'cors';

const server = express();
server.use(json());
server.use(cors());

server.listen(5000, () => {
    console.log('Running on http://localhost:5000');
});

const users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    users.push(req.body);
    res.send('OK');
});

server.post('/tweets', (req, res) => {
    tweets.push(req.body);
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
