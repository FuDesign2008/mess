
/**
 *
 *
 * @author fuyg
 * @date  2015-05-30
 */
define([
    'underscore',
    '../jtk/console',
    './case'
], function (
    _,
    console,
    CASE
) {
    'use strict';

    var strList = [
        'Hello',
        'goood',
        'HMMMMMM------kkk',
        'FINe__mmmAAA-a',
        null,
        undefined,
        0,
        1,
        3
    ];

    _.each(strList, function (str) {
        str = str + '';

        var upper = CASE.toUpperCase(str),
            lower = CASE.toLowerCase(str);

        console.log(
            str,
            'upper: ' + (upper === str.toUpperCase()),
            'lower: ' + (lower === str.toLowerCase())
        );

    });
});
