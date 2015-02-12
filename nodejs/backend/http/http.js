
var http = require('http'),
    querystring = require('querystring'),
    server = http.createServer(function (req, res) {
        var post = '';
        req.on('data', function (chunk) {
            post += chunk;
        });

        req.on('end', function () {
            post = querystring.parse(post);
            res.write('hello world! This is nodejs.');
            if (post && post.title) {
                res.write('\ntitle: ' + post.title);
                res.write('\ntext: ' + post.text);
            }
            res.end();
        });
    }).listen(3000);
