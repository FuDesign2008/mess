/**
 *
 *
 * @author fuyg
 * @date  2015-04-07
 */
define(function (require) {
    var console = require('../jtk/console'),
        $ = require('jquery'),
        _ = require('underscore'),
        Modernizr = require('Modernizr'),
        Context2D = require('../Context2D'),
        canvas,
        context,
        width = 500,
        height = 300,
        drawFunctions = [
            require('./grid'),
            require('./lineCapAndJoin'),
            require('./arc'),
            require('./arcTo'),
            require('./bezier')
        ];

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

    _.each(drawFunctions, function (fn) {
        context.save();

        try {
            fn(context, width, height);
        } catch (ex) {
            throw ex;
        }

        context.restore();
    });





});
