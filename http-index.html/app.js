const http = require('http');
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (error, data) => {
        if (error) {
            res.writeHead(404);
            res.write('Error - File Not Found');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data);
            res.end();
        }
    });
});

server.listen(port, (error) => {
    if (error) {
        console.log('error occured', error);
    } else {
        console.log('server is listening no port', port);
    }
});
