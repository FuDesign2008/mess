/**
 *
 *
 * @author fuyg
 * @date  2015-07-26
 */
define(function (require) {
    'use strict';

    var IS_EQUAL = require('./isEqual'),
        $ = require('jquery'),
        console = window.console;

    $.get('./html.txt', function (html) {
        var isEqual = IS_EQUAL(html, html);

        console.log('isEqual: ' + isEqual);
    });


});
