const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello World');
    res.write('Hello Node');
    res.end();
});

server.listen(3000, (error) => {
    if (error) {
        console.log('error occured', error);
    } else {
        console.log('server is listening no port', port);
    }
});
