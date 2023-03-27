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
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send(ads);
});

app.get('/members', (req, res) => {
    console.log('get members');

    console.log('query page =', req.query.page);
    console.log('query size =', req.query.size);

    res.status(200).json({
        message: 'get members ok'
    });
});

app.post('/members/:id', (req, res) => {
    console.log('post members');

    console.log('req.params.id =', req.params.id);
    console.log('req.body.name =', req.body.name);
    console.log('req.body.age =', req.body.age);

    res.status(200).json({
        message: 'post members ok'
    });
});

app.listen(3001, () => {
    console.log('listening on port 3001');
});
