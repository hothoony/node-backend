const express = require('express');
const app = express();
const port = 3000;

app.use(logging);

app.get('/', (req, res) => {
    console.log('index');
    res.send('res index');
});

app.get('/users', (req, res) => {
    console.log('users');
    res.send('res users');
});

function logging(req, res, next) {
    const now = new Date().toISOString();
    const uri = req.originalUrl;
    console.log();
    console.log(`[${now}] ${uri}`);
    next();
}

app.listen(port, (error) => {
    console.log(`server is listening on port ${port}`);
});
