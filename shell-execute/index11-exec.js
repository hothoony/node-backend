const { exec } = require('child_process');

const runExec = (cmd) => {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`------------------error`);
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
};

// runExec('ls -al'); // stdout
runExec('ls --AL'); // error
