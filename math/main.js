
define(function (require) {

    var Ball = require('./Ball'),
        Rectangle = require('./Rectangle'),
        Point = require('./Point'),
        Velocity = require('./Velocity'),
        rect = new Rectangle(new Point(0, 0), new Point(500, 500)),
        ballVelocity = new Velocity(5, Math.PI/4),
        ball = new Ball(ballVelocity, new Point(30, 30));


    ball.on('draw', function () {
        var point = ball.centerPoint,
            radius = 3;

    });

    rect.ball('draw', function () {
        // TODO

    });

    ball.trigger('draw');
    rect.trigger('draw');


});
