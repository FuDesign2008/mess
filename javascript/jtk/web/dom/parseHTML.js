/**
 *
 *
 * @author fuyg
 * @date  2015-07-26
 */
define(function () {

    'use strict';

    return function (html) {
        var wrapper = document.createElement();

        wrapper.innerHTML = html;
        return wrapper;
    };
});
