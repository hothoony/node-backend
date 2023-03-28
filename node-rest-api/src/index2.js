console.log('hello node');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const teamRoute = require('./routes/teamRoute');
const memberRoute = require('./routes/memberRoute');

const app = express();

// middleware
app.use(helmet());
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('combined'));

// route
app.use('/api/v1', memberRoute);
app.use('/api/v1', teamRoute);

// port
const SERVER_PORT = 3001;

app.listen(SERVER_PORT, () => {
    console.log('node server is running on port %i', SERVER_PORT);
});
