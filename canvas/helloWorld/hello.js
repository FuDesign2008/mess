/**
 *
 *
 * @author fuyg
 * @date  2015-04-07
 */
define(function (require) {
    var console = require('../jtk/console'),
        $ = require('jquery'),
        Modernizr = require('Modernizr');

    if (!Modernizr.canvas) {
        console.log('Your browser does not support canvas!');
        return;
    }

    $(function () {
        var element = document.querySelector('canvas'),
            context = element.getContext('2d'),
            drawScreen = function (context2D) {
                // backgroud
                context2D.fillStyle = '#ffffaa';
                context2D.fillRect(0, 0, 500, 300);

                //text
                context2D.fillStyle = '#000000';
                context2D.font = '20px _sans';
                context2D.textBaseline = 'top';
                context2D.fillText('Hello World', 195, 90);


                // image
                var img = new window.Image();
                img.onload = function () {
                    context2D.drawImage(img, 160, 130);
                };

                img.onerror = function () {
                    console.log('Failed to load image!');
                };

                img.src = './hello-world.jpg';



            };

        drawScreen(context);
    });

});
