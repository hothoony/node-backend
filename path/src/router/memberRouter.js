const express = require('express');
const path = require('path');

const hello = () => {
    
    console.log();
    console.log('process.env.PWD     : ', process.env.PWD);
    console.log('process.env.OLDPWD  : ', process.env.OLDPWD);

    console.log();
    console.log('__dirname           : ', __dirname);
    console.log('__dirname dirname   : ', path.dirname(__dirname));
    console.log('__dirname basename  : ', path.basename(__dirname));
    console.log('__dirname extname   : ', path.extname(__dirname));

    console.log();
    console.log('__filename          : ', __filename);
    console.log('__filename dirname  : ', path.dirname(__filename));
    console.log('__filename basename : ', path.basename(__filename));
    console.log('__filename extname  : ', path.extname(__filename));

    console.log();
}

module.exports = {
    hello,
}
