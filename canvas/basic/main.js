/**
 *
 *
 * @author fuyg
 * @date  2015-04-07
 */
define(function (require) {
    var console = require('../jtk/console'),
        $ = require('jquery'),
        //_ = require('underscore'),
        Modernizr = require('Modernizr'),
        Context2D = require('../Context2D'),
        Operation = require('./Operation'),
        canvas,
        context,
        width = 500,
        height = 300,
        timeout = 100 * 5,
        drawFunctions = [
            require('./grid'),
            require('./lineCapAndJoin'),
            require('./arc'),
            require('./arcTo'),
            require('./bezier'),
            require('./clip'),
            require('./globalAlpha'),
            require('./globalCompositeOperation')
        ],
        runDrawFunctions = function () {
            var fn = drawFunctions.shift(),
                fnStr,
                operation;

            if (!fn) {
                return;
            }

            operation = Operation.create(fn);

            context.save();
            fnStr = fn.toString();
            if (/trigger\('finish'\)/.test(fnStr)) {
                operation.on('finish', function () {
                    context.restore();
                    window.setTimeout(runDrawFunctions, timeout);
                });
                operation.execute(context, width, height);
            } else {
                operation.execute(context, width, height);
                context.restore();
                window.setTimeout(runDrawFunctions, timeout);
            }


        };

    if (!Modernizr.canvas) {
        console.log('Your browser does not support canvas!');
        return;
    }


    canvas = $('canvas', document.body).get(0);

    if (!canvas) {
        console.warn('No canvas element in html!');
        return;
    }

    context = Context2D.create(canvas);

    runDrawFunctions();
});
