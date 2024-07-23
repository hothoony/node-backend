const { spawn } = require('child_process');

// const child = spawn('ls', ['-lh', '/usr']); // stdout
// const child = spawn('ls', ['-lh2', '/usr']); // stderr
const child = spawn('ls2', ['-lh', '/usr']); // on.error 가 없으면 => Uncaught Error Error: spawn ls2 ENOENT

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

// child.on('error', (err) => {
//     console.log(`error err: ${err}`);
// });

child.on('close', (code) => {
    console.log(`close code: ${code}`);
});
