
var http = require('http');
var port = 8214;

var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World!\n');
});

server.listen(port, '127.0.0.1');

console.log('Server running at http://127.0.0.1:' + port);
