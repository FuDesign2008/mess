
define(function (require) {

    var Ball = require('./Ball'),
        Rectangle = require('./Rectangle'),
        Point = require('./Point'),
        Line = require('Line'),
        Velocity = require('./Velocity'),
        rect = new Rectangle(new Point(10, 10), new Point(200, 200)),
        ballVelocity = new Velocity(3, Math.PI/6),
        ball = new Ball(ballVelocity, new Point(30, 30)),
        canvas = document.querySelector('canvas'),
        context = canvas.getContext('2d'),
        moveBall,
        timeoutID,
        isPaused = false,
        ballOldPosition,
        drawRect = function () {
            var start = rect.startPoint;
            context.strokeRect(start.x, start.y, rect.width(), rect.height());
        };

    context.lineWidth = 1;

    ball.on('draw', function () {
        var point = ball.centerPoint,
            radius = 3;

        if (ballOldPosition) {
            context.clearRect(
                ballOldPosition.x - radius - 2,
                ballOldPosition.y - radius - 2,
                (radius + 2) * 2,
                (radius + 2) * 2
            );
        }

        ballOldPosition = point;

        context.beginPath();
        context.arc(point.x, point.y, radius, 0, Math.PI * 2, true);
        context.stroke();

    });

    //ball.on('draw-rect', drawRect);
    rect.on('draw', drawRect);

    ball.trigger('draw');
    rect.trigger('draw');

    moveBall = function () {
        if (timeoutID) {
            window.clearTimeout(moveBall);
        }
        if (isPaused) {
            return;
        }
        ball.move(rect);
        window.setTimeout(moveBall, 10);
    };

    moveBall();

    document.querySelector('#pause').onclick = function () {
        isPaused = true;
    };

    document.querySelector('#continue').onclick = function () {
        isPaused = false;
        moveBall();
    };

    //var testLine = new Line(
            //new Point(122.13158225628248, 7.5000000000000355),
            //new Point(126.46170927520468, 10.000000000000034)
        //),
        //result = rect.hitTest(testLine);

     //200.00000000000003
     //52.45735194570564
    //window.console.log(result);

});
