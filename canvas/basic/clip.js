/**
 *
 *
 * @author FuDesign2008@163.com
 * @date  2015-04-13
 */
define(function () {

    return function (context/*, width, height*/) {

        context.attr('fillStyle', 'black').
            fillRect(10, 10, 200, 200).
            save().
            beginPath().
            rect(0, 0, 50, 50).
            clip().
            beginPath().
            attr({
                strokeStyle: 'red',
                lineWidth: 5
            }).arc(100, 100, 100, 0, Math.PI * 2, false).
            stroke().
            closePath().
            restore().
            beginPath().
            rect(100, 100, 200, 200).
            clip().
            beginPath().
            attr({
                strokeStyle: 'blue',
                lineWidth: 5
            }).arc(100, 100, 50, 0, Math.PI * 2, false).
            stroke().
            closePath();
    };
});
