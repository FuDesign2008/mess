/**
 *
 *
 * @author fuyg
 * @date  2015-04-11
 */
define(function (require) {
    var _ = require('underscore');

    return function (context/*, width, height*/) {
        var radiusList = _.range(10, 100, 20);

        _.each(radiusList, function (radius) {
            context.beginPath().
                arc(100, 100, radius, 0, Math.PI * 2, true).
                stroke().
                closePath();
        });

    };
});
