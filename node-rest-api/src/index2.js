const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const teamRoute = require('./routes/teamRoute');

const app = express();

const ads = [
    {title: 'Hello world 123'}
];

/* middleware */
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));

/* route */
app.use('/api/v1/teams', teamRoute);
// app.use(teamRoute);
// app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.send(ads);
});

/* controller */
app.get('/members', (req, res) => {
    console.log('');
    console.log('## get members');

    // header
    const authorization = req.header('Authorization');
    console.log('  authorization =', authorization);

    // query string
    console.log('  query page =', req.query.page);
    console.log('  query size =', req.query.size);

    res.status(200).json({
        message: 'get members ok',
        parseParam: {
            header: req.header('Authorization'),
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
    // Content-Type: application/x-www-form-urlencoded
    console.log('  req.body.name =', req.body.name);
    console.log('  req.body.age =', req.body.age);

    res.status(200).json({
        message: 'patch members ok',
        parseParam: {
            id: req.params.id,
            name: req.body.name,
            age: req.body.age,
        },
    });
});

app.post('/members', (req, res) => {
    console.log('');
    console.log('## post members');

    // Content-Type: application/json
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

const SERVER_PORT = 3001;

app.listen(SERVER_PORT, () => {
    console.log('node server is running on port %i', SERVER_PORT);
});
