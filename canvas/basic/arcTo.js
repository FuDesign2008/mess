/**
 *
 *
 * @author fuyg
 * @date  2015-04-11
 */
define(function (require) {

    return function (context/*, width, height*/) {

        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(100, 200);
        context.arcTo(300, 200, 100, 100, 20);
        context.stroke();
        context.closePath();

        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(200, 100);
        context.arcTo(200, 200, 400, 100, 30);
        context.stroke();
        context.closePath();

    };
});
