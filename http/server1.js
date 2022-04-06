var http = require('http');

function onRequest(req, res) {
    console.log(req, res);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hello world');
    res.end();
}

var server = http.createServer(onRequest);

server.listen(8080);
console.log('server ready');
