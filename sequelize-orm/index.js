// .env 파일을 로딩한다
require('dotenv').config();

/*
    process.env.NODE_ENV 변수에 따라 파일을 다르게 로딩한다
    - .env.development
    - .env.production
*/
require('dotenv').config({path: `${__dirname}/.env.${process.env.NODE_ENV}`});
// require('dotenv').config({path: `./.env.${process.env.NODE_ENV}`});

// console.log('process.env', process.env);
console.log('index.js, process.env.NODE_ENV', process.env.NODE_ENV);
console.log('index.js, .env file', `./.env.${process.env.NODE_ENV}`);
console.log('index.js, process.env.DB_HOST', process.env.DB_HOST);
console.log('index.js, process.env.DB_PORT', process.env.DB_PORT);
console.log('index.js, process.env.DB_USERNAME', process.env.DB_USERNAME);
console.log('index.js, process.env.DB_PASSWORD', process.env.DB_PASSWORD);
console.log('index.js, process.env.DB_DATABASE', process.env.DB_DATABASE);

/*
    sequelize
*/
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
// const config = require('./config/config.json')[env];
const config = require('./config/config.js')[env];

console.log('');
console.log('env', env);
console.log('config', config);

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        dialect: config.dialect,
    }
);

// console.log('sequelize', sequelize);
