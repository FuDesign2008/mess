
define(function (require) {

    var Ball = require('./Ball'),
        Rectangle = require('./Rectangle'),
        Point = require('./Point'),
        Velocity = require('./Velocity'),
        rect = new Rectangle(new Point(0, 0), new Point(300, 300)),
        canvas = document.querySelector('canvas'),
        context = canvas.getContext('2d'),
        moveBalls,
        timeoutID,
        isPaused = false,
        ballList = [
            new Ball(new Velocity(10, Math.PI/7), new Point(30, 30), context),
            new Ball(new Velocity(10, Math.PI/5), new Point(30, 50), context),
            new Ball(new Velocity(10, Math.PI/3), new Point(60, 70), context)
        ];

    context.lineWidth = 1;
    context.strokeStyle = 'rgba(0, 0, 0, 255)';


    moveBalls = function () {
        if (timeoutID) {
            window.clearTimeout(moveBalls);
        }
        if (isPaused) {
            return;
        }

        ballList.forEach(function (ball) {
            ball.move(rect);
        });

        window.setTimeout(moveBalls, 20);
    };

    moveBalls();

    document.querySelector('#pause').onclick = function () {
        isPaused = true;
    };

    document.querySelector('#continue').onclick = function () {
        isPaused = false;
        moveBalls();
    };

});
