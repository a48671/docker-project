const express = require('express');
const mongoos = require('mongoose');
const axios = require('axios');
const { PORT, DB, URL_AUTH_API } = require('./configuration');
const connectDb = require('./helpers/db');

const app = express();

const postSchema = new mongoos.Schema({
    name: String
});
const Post = mongoos.model('Post', postSchema);

const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Service API run on port http://localhost:${PORT}`);
        console.log(`Our database: ${DB}`);
        const silence = new Post({name: 'Silence'});
        Post.find((err, posts) => {
            if (err) return console.error(err);
            console.log('posts: ',posts)
        })
        silence.save((err, savedSilence) => {
            if (err) return console.error(err);
            console.log('savedSilence with volumes: ', savedSilence);
        });
    });
}

app.get('/auth-us', (req, res) => {
    axios.get(`${URL_AUTH_API}/check`).then(
        response => {
            console.log('response:', response);
            res.json({
                userAuth: true,
                ...response.data
            });
        }
    ).catch(err => {
        console.log(err);
        res.send('Error')
    });
});

connectDb()
    .on('error', console.error)
    .once('open', startServer);
