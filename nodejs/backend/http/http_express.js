var express = require('express');

var app = express.createServer();

app.use(express.bodyParser());

app.all('/', function (request, response) {
    response.end(request.body.title + request.body.text);
});

app.listen(3000);
