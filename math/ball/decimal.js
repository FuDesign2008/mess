
/**
 *
 *
 * @author fuyg
 * @date  2015-03-31
 */
define(function (require) {
    var decimal = require('decimal');

    decimal.config({
        precision: 64
    });

    return decimal;
});
