var http = require('http'),
    querystring = require('querystring'),
    server = http.createServer(function (request, response) {
        var post = '';
        request.on('data', function (chunk) {
            post += chunk;
        });

        request.on('end', function () {
            post = querystring.parse(post);
            response.write(post.title);
            response.write(post.text);
            response.end();
        });
    }).listen(3000);
