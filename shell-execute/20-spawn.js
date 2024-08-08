const { spawn } = require('child_process');

const runExec = (cmd, args) => {

    const child = spawn(cmd, args);

    child.stdout.on('data', (data) => {
        console.log(`------------------stdout`);
        // console.log(data);
        console.log(data.toString());
    });

    child.stderr.on('data', (data) => {
        console.log(`------------------stderr`);
        // console.log(data);
        console.log(data.toString());
    });

    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

};

// runExec('ls', ['-al']); // stdout
runExec('ls', ['--AL']); // stderr
