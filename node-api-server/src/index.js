console.log('hello node');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const ads = [
    {title: 'Hello world 123'}
];

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send(ads);
});

app.get('/members', (req, res) => {
    console.log('get members');
    res.status(200).json({
        message: 'get members ok'
    });
});

app.post('/members/:id', (req, res) => {
    console.log('post members');
    res.status(200).json({
        message: 'post members ok'
    });
});

app.listen(3001, () => {
    console.log('listening on port 3001');
});
