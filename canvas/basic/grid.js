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

        context.lineWidth = 0.1;
        context.strokeStyle = 'red';

        _.each(xList, function (x) {
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, height);
            context.stroke();
            context.closePath();
        });

        _.each(yList, function (y) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(width, y);
            context.stroke();
            context.closePath();
        });
    };
});
