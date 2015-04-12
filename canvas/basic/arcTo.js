/**
 *
 *
 * @author fuyg
 * @date  2015-04-11
 */
define(function () {

    return function (context/*, width, height*/) {

        context.beginPath().
            moveTo(0, 0).
            lineTo(100, 200).
            arcTo(300, 200, 100, 100, 20).
            stroke().
            closePath().
            beginPath().
            moveTo(0, 0).
            lineTo(200, 100).
            arcTo(200, 200, 400, 100, 30).
            stroke().
            closePath();

    };
});
