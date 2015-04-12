/**
 *
 *
 * @author fuyg
 * @date  2015-04-11
 */
define(function (require) {
    var _ = require('underscore');

    return function (context/*, width, height*/) {

        context.attr('strokeStyle', 'green').
            beginPath().
            moveTo(150, 0).
            bezierCurveTo(0, 125, 300, 175, 150, 300).
            stroke().
            closePath();

        var xList1 = _.range(200, -201, -100),
            xList2 = _.range(300, 701, 100);

        context.attr('strokeStyle', 'blue');
        _.each(xList1, function (x, index) {
            context.beginPath().
                moveTo(250, 0).
                bezierCurveTo(x, 100, xList2[index], 200, 250, 300).
                stroke().
                closePath();
        });

    };
});
