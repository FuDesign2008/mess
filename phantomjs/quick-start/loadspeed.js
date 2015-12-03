
'use strict';

var webpage = require('webpage'),
    system = require('system'),
    page = webpage.create(),
    startTime,
    address;

if (system.args.length !== 2) {
    console.log('Usage: loadspeed.js <some URL>');
    phantom.exit();
}

startTime = Date.now();
address = system.args[1];

page.open(address, function (status) {
    if (status === 'success') {
        var diff = Date.now() - startTime;
        console.log('Load ' + address + ' time: ' + diff + ' ms');
    } else {
        console.log('Failed to load ' + address);
    }

    phantom.exit();
});

