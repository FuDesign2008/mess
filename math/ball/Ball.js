/**
 *
 *
 * @author fuyg
 * @date  2015-03-31
 */
define(function (require) {
    var Base = require('../jtk/Base'),
        Line = require('./Line'),
        Ball = Base.extend({

            constructor: function (velocity, point, context2D) {
                var that = this;
                that.velocity = velocity;
                that.centerPoint = point;
                that.context2D = context2D;

                that.on('draw', that.draw.bind(that));
            },

            /**
             * @param {Rectangle} rect
             */
             move: function (rect) {
                var that = this,
                    forecastLine = that.forecast();

                that.moveLine(forecastLine, rect);
            },

            moveLine: function (line, rect, exceptSide) {
                var that = this,
                    velocity = that.velocity,
                    result = rect.hitTest(line, exceptSide),
                    crossPoint,
                    startLine,
                    nextLine,
                    nextLineLength,
                    nextLineEndPoint;

                if (!result) {
                    that.centerPoint = line.endPoint;
                    that.trigger('draw');
                    return;
                }

                velocity.angle = 2 * result.line.angleX() - velocity.angle;
                velocity.speed = velocity.speed * 0.99;

                crossPoint = result.point;

                that.trigger('draw', crossPoint);

                startLine = new Line(line.startPoint, crossPoint);
                nextLineLength = line.getLength() - startLine.getLength();
                nextLineEndPoint = velocity.computeEndPoint(crossPoint,
                        nextLineLength);
                nextLine = new Line(crossPoint, nextLineEndPoint);
                that.moveLine(nextLine, rect, result.line);
            },

            /**
             * @return {Line}
             */
            forecast: function () {
                var that = this,
                    start = that.centerPoint,
                    forecastLine = that.velocity.move(start);

                return forecastLine;
            },

            draw: function (crossPoint) {
                var that = this,
                    context = that.context2D,
                    point = crossPoint || that.centerPoint,
                    radius = 3,
                    clearRadius = radius + 2,
                    len,
                    x,
                    y;


                if (that.lastDrawPosition) {
                    x = that.lastDrawPosition.x - clearRadius;
                    y = that.lastDrawPosition.y - clearRadius;
                    len = clearRadius * 2;

                    context.clearRect(x, y, len, len);
                }

                context.beginPath();
                context.arc(point.x, point.y, radius, 0, Math.PI * 2, true);
                context.stroke();
                context.closePath();
                that.lastDrawPosition = point.clone();
            }

        });


    return Ball;

});
