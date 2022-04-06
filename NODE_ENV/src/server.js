const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('NODE_ENV', process.env.NODE_ENV);
});

app.listen(port, (error) => {
    console.log('server is listening');
    console.log('NODE_ENV', process.env.NODE_ENV);
});
