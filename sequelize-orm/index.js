// .env 파일을 로딩한다
// require('dotenv').config();

/*
    process.env.NODE_ENV 변수에 따라 파일을 다르게 로딩한다
    - .env-development
    - .env-production
*/
// require('dotenv').config({path: `${__dirname}/.env-${process.env.NODE_ENV}`});
require('dotenv').config({path: `./.env-${process.env.NODE_ENV}`});

console.log('process.env', process.env);
console.log('DB_HOST', process.env.DB_HOST);
console.log('DB_PORT', process.env.DB_PORT);
console.log('DB_USERNAME', process.env.DB_USERNAME);
console.log('DB_PASSWORD', process.env.DB_PASSWORD);
