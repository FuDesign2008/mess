
/**
 *
 *
 * @author FuDesign2008@163.com
 * @date  2015-04-16
 */
define(function (require) {
    var _ = require('underscore');

    return function (context/*, width, height*/) {

        var arr = _.range(0, 100, 5),
            x = 250,
            w = 10,
            h = 10;

        context.attr({
            fillStyle: '#FF0000'
        });

        _.each(arr, function (value) {
            context.attr({
                globalAlpha: value / 100
            }).fillRect(x + value * 2, value * 2, w, h);
        });


    };
});
