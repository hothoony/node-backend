const { execFile } = require('child_process');

const runExec = (cmd, args) => {
    
    const child = execFile(cmd, args, (error, stdout, stderr) => {
        if (error) {
            console.log(`------------------error`);
            console.log('error.code', error.code);
            console.log(`------------------`);
            console.log(error);
            return;
        }
        if (stderr) {
            console.log(`------------------stderr`);
            console.log(stderr);
            return;
        }
        console.log(`------------------stdout`);
        console.log(stdout);
    });

    child.on('exit', (code, signal) => {
        console.log(`process exited with code: ${code}`);
        if (signal) {
            console.log(`process terminated with signal: ${signal}`);
        }
    });

};

// runExec('ls', ['-al']); // stdout
runExec('ls', ['--AL']); // error
