/**
 *
 *
 * @author fuyg
 * @date  2015-03-31
 */
define(function (require) {
    var Base = require('./jtk/Base'),
        Line = require('./Line'),
        Ball = Base.extend({

            constructor: function (velocity, point) {
                var that = this;
                that.velocity = velocity;
                that.centerPoint = point;
            },

            /**
             * @param {Rectangle} rect
             */
             move: function (rect) {
                var that = this,
                    velocity = that.velocity,
                    forecastLine = that.forecast(),
                    result = rect.hitTest(forecastLine),
                    startHalfLine,
                    endHalfLineLength;

                if (!result) {
                    // update position
                    if (that.centerPoint.isEqual(forecastLine.startPoint)) {
                        that.centerPoint = forecastLine.endPoint;
                    } else {
                        that.centerPoint = forecastLine.startPoint;
                    }
                    that.trigger('draw');
                    return;
                }

                velocity.angle = velocity.angle + 2 * result.line.angleX();

                startHalfLine = new Line(that.centerPoint, result.point);
                endHalfLineLength =
                    forecastLine.getLength() - startHalfLine.getLength();
                that.centerPoint =
                    velocity.computeEndPoint(result.point, endHalfLineLength);

                that.trigger('draw');
            },

            /**
             * @return {Line}
             */
            forecast: function () {
                var that = this,
                    start = that.centerPoint,
                    forecastLine = that.velocity.move(start);

                return forecastLine;
            }

        });


    return Ball;

});
