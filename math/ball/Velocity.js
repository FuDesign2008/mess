/**
 *
 *
 * @author fuyg
 * @date  2015-03-31
 */
define(function (require) {
    var Class = require('../jtk/Class'),
        Line = require('./Line'),
        Point = require('./Point'),
        Decimal = require('./decimal'),
        math = require('./math'),
        Velocity = Class.extend({

            constructor: function (speed, angle) {
                var that = this;

                window.console.warn(angle);

                that.speed = new Decimal(speed);
                that.angle = new Decimal(angle);
            },

            /**
             * @return {Line}
             */
            move: function (startPoint) {
                var that = this,
                    angle = that.angle.toNumber(),
                    distance = that.speed,
                    distanceX = math.bignumber(math.cos(angle) + ''
                        ).times(distance),
                    distanceY = math.bignumber(math.sin(angle) + ''
                        ).times(distance),
                    endPoint = startPoint.createWithDistance(distanceX,
                        distanceY);

                return new Line(startPoint, endPoint);
            },

            computeEndPoint: function (startPoint, distance) {
                var that = this,
                    angle = that.angle.toNumber(),
                    x = math.bignumber(math.cos(angle) + ''
                        ).times(distance).plus(startPoint.x),
                    y = math.bignumber(math.sin(angle) + ''
                        ).times(distance).plus(startPoint.y);

                return new Point(x, y);
            }

        });


    return Velocity;

});
