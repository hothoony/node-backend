const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    console.log(req.url);
    if (req.url === '/') {
        res.end('root page 한글 테스트');
    } else if (req.url === '/login') {
        res.end('login page');
    }
});

server.listen(3000, () => {
    console.log('http server listening');
});