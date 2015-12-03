
'use strict';

var page = require('webpage').create(),
    system = require('system'),
    url;

if (system.args.length !== 2) {
    console.log('Usage get-title.js <some url>');
    phantom.exit();
}

url = system.args[1];

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

