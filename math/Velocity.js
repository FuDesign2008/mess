/**
 *
 *
 * @author fuyg
 * @date  2015-03-31
 */
define(function (require) {
    var Class = require('./jtk/Class'),
        Line = require('./Line'),
        Point = require('./Point'),
        Velocity = Class.extend({

            constructor: function (speed, angle) {
                var that = this;
                that.speed = speed;
                that.angle = angle;
            },

            /**
             * @return {Line}
             */
            move: function (startPoint) {
                var that = this,
                    angle = that.angle,
                    distance = that.speed * 1,
                    distanceX = Math.cos(angle) * distance,
                    distanceY = Math.sin(angle) * distance,
                    endPoint = startPoint.createWithDistance(distanceX,
                        distanceY);

                return new Line(startPoint, endPoint);
            },

            computeEndPoint: function (startPoint, distance) {
                var that = this,
                    angle = that.angle,
                    x = startPoint.x + distance * Math.cos(angle),
                    y = startPoint.y + distance * Math.sin(angle);

                return new Point(x, y);
            }

        });


    return Velocity;

});
