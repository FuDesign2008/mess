/**
 *
 *
 * @author fuyg
 * @date  2015-04-11
 */
define(function (require) {
    var _ = require('underscore');

    return function (context, width, height) {
        var xList = _.range(100, width - 1, 100),
            yList = _.range(100, height - 1, 100);

        context.attr({
            lineWidth: 0.1,
            strokeStyle: 'red'
        });

        _.each(xList, function (x) {
            context.beginPath().
                moveTo(x, 0).
                lineTo(x, height).
                stroke().
                closePath();
        });

        _.each(yList, function (y) {
            context.beginPath().
                moveTo(0, y).
                lineTo(width, y).
                stroke().
                closePath();
        });
    };
});
