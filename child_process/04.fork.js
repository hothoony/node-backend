const { fork } = require('child_process');

const child = fork('child.js');

child.send({ hello: 'world' });

child.on('message', (message) => {
    console.log('message', message);
});

child.on('exit', (code) => {
    console.log('exit code', message);
});
