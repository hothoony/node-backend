const { exec } = require('child_process');

const runShell = (cmd) => {
    exec(cmd, (err, stdout, stderr) => {
    if (err) {
        console.log('err', err);
        return;
    }
    if (err) {
        console.log('stderr', stderr);
        return;
    }
    console.log('---------------------------- stdout');
    console.log(stdout);
});
}

runShell('ls -al');
runShell('./test.sh');
