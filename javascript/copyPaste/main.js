
/**
 *
 *
 * @author fuyg
 * @date  2015-05-05
 */
define(function (require) {
    'use strict';

    var console = require('../jtk/console'),
        $ = require('jquery');


    $(document).on('copy', function (event) {
        var rawEvent = event.originalEvent || event,
            clipboardData = rawEvent.clipboardData;


        console.log('on copy!');
        console.log(rawEvent);

        event.preventDefault();

        if (!clipboardData) {
            return;
        }

        clipboardData.setData('text/html', '<b>Hello</b>');
        clipboardData.setData('text/plain', 'Hello');
    });

});
