/**
 *
 *
 * @author fuyg
 * @date  2015-04-11
 */
define(function (require) {
    var _ = require('underscore');

    return function (context/*, width, height*/) {
        var configs = [
                {
                    lineJoin: 'miter',
                    lineCap: 'square',
                    start: [10, 50],
                    middle: [35, 50],
                    end: [35, 75]
                },
                {
                    lineJoin: 'bevel',
                    lineCap: 'round',
                    start: [10, 100],
                    middle: [35, 100],
                    end: [35, 125]
                },
                {
                    lineJoin: 'round',
                    lineCap: 'butt',
                    start: [10, 150],
                    middle: [35, 150],
                    end: [35, 175]
                }
            ];

        context.attr({
            strokeStyle: 'black',
            lineWidth: 10
        });

        _.each(configs, function (config) {
            context.attr({
                lineJoin: config.lineJoin,
                lineCap: config.lineCap
            }).beginPath().
                moveTo(config.start[0], config.start[1]).
                lineTo(config.middle[0], config.middle[1]).
                lineTo(config.end[0], config.end[1]).
                stroke().
                closePath();
        });

    };
});
