
'use strict';

var page = require('webpage').create(),
    system = require('system'),
    url;

if (system.args.length !== 2) {
    console.log('Usage get-title.js <some url>');
    phantom.exit();
}

url = system.args[1];

page.onResourceRequested = function (request) {
    console.log('Request ' + JSON.stringify(request, undefined, 4));
};

page.onResourceReceived = function (response) {
    console.log('Receive ' + JSON.stringify(response, undefined, 4));
};

page.open(url, function (status) {

    console.log('status: ' + status);

    if (status === 'success') {
        var title = page.evaluate(function () {
            return document.title;
        });

        console.log('Page title is: ' + title);
    }

    phantom.exit();

});

