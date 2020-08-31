const express = require('express');
const { PORT, DB } = require('./configuration');
const connectDb = require('./helpers/db');

const app = express();

const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Service Auth run on port http://localhost:${PORT}`);
        console.log(`Our database: ${DB}`);
    });
}

app.get('/check', (req, res) => {
    res.json({
        id: 123,
        mail: "fomin@mail.com"
    });
});

connectDb()
    .on('error', console.error)
    .once('open', startServer);
