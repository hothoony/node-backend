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

// middleware
app.use(helmet());
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('combined'));

// routes
app.get('/', (req, res) => {
    res.send(ads);
});

app.get('/members', (req, res) => {
    console.log('');
    console.log('## get members');

    // query string
    console.log('  query page =', req.query.page);
    console.log('  query size =', req.query.size);

    res.status(200).json({
        message: 'get members ok',
        parseParam: {
            page: req.query.page,
            size: req.query.size,
        },
    });
});

app.patch('/members/:id', (req, res) => {
    console.log('');
    console.log('## patch members');

    // path variable
    console.log('  req.params.id =', req.params.id);

    // form data
    console.log('  req.body.name =', req.body.name);
    console.log('  req.body.age =', req.body.age);

    res.status(200).json({
        message: 'patch members ok',
        parseParam: {
            name: req.body.name,
            age: req.body.age,
        },
    });
});

app.post('/members', (req, res) => {
    console.log('');
    console.log('## post members');

    // application/json
    console.log('  req.body.name =', req.body.name);
    console.log('  req.body.age =', req.body.age);
    console.log('  req.body.gender =', req.body.gender);

    res.status(200).json({
        message: 'post members ok',
        parseParam: {
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
        },
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log('listening on port %i', PORT);
});
