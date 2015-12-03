
'use strict';

var page = require('webpage').create(),
    URL = 'http://phantomjs.org/quick-start.html';

page.open(URL, function (status) {
    console.log('status: ' + status);

    if (status === 'success') {
        page.render('./build/load-web-page.png');
    }

    phantom.exit();
});

