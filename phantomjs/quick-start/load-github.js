
'use strict';

var page = require('webpage').create(),
    PAGE_URL = 'http://www.baidu.com/',
    FILE_TYPES = ['png', 'jpg', 'gif', 'pdf'],
    counter = 0,
    LIMIT = 2,
    exitUntil = function () {
        counter++;
        if (counter === LIMIT) {
            phantom.exit();
        }
    };

page.viewportSize = {
    width: 1024,
    height: 768
};

page.clipRect = {
    top: 0,
    left: 0,
    width: 1024,
    height: 768
};

page.open(PAGE_URL, function (status) {

    console.log('status: ' + status);

    if (status === 'success') {
        FILE_TYPES.forEach(function (fileType) {
            page.render('./build/load-github.' + fileType);
        });
    }

    exitUntil();
});

var newPage = require('webpage').create(),
    CLOCK_URL = 'http://raphaeljs.com/polar-clock.html',
    renderPage = function () {
        window.setTimeout(function () {
            newPage.render('./build/clock.png');
            exitUntil();
        }, 1000);
    };

newPage.open(CLOCK_URL, function (status) {

    console.log('status: ' + status);

    if (status === 'success') {
        renderPage();
    } else {
        exitUntil();
    }

});





