/**
 *
 *
 * @author fuyg
 * @date  2015-03-31
 */
define(function (require) {

    var Class = require('../jtk/Class'),
        console = require('../jtk/console'),
        Point = require('./Point'),
        Vector = require('./Vector'),
        Decimal = require('./decimal'),
        math = require('./math'),
        Line;

    Line = Class.extend({

        constructor: function (startPoint, endPoint) {
            var that = this;
            // endPoint is greater than startPoint
            //if (startPoint.compare(endPoint) === Point.LESS) {
            that.startPoint = startPoint;
            that.endPoint = endPoint;
            //} else {
                //that.endPoint = startPoint;
                //that.startPoint = endPoint;
            //}
        },

        getLength: function () {
            var that = this,
                start,
                end;

            if (!that._length) {
                start = that.startPoint;
                end = that.endPoint;
                that._length = Decimal.sqrt(Decimal.pow(end.y.minus(start.y), 2
                    ).plus(Decimal.pow(end.x.minus(start.x), 2)));
            }

            return that._length;
        },

        isParallel: function (line) {
            var that = this,
                thatVector = new Vector(that.startPoint, that.endPoint),
                lineVector = new Vector(line.startPoint, line.endPoint);

            return thatVector.isParallel(lineVector);
        },

        /**
         * two closed line segments has cross point or not
         * @return {Point|False}
         */
        hitTest: function (line) {
            var that = this,
                crossPoint;

            if (that.isParallel(line)) {
                console.log('line is parallel!');
                return false;
            }

            crossPoint = that._crossPoint(line);

            if (that.isInClosedLine(crossPoint)) {
                return crossPoint;
            }

            return false;
        },

        isInClosedLine: function (point) {
            var that = this,
                start = that.startPoint,
                end = that.endPoint,
                len = that.getLength(),
                startPart = new Line(start, point),
                endPart = new Line(point, end),
                sum = startPart.getLength().plus(endPart.getLength()),
                result = sum.minus(len).abs().lessThan('0.00000000000000000000000000000000000000001');

            return result;
        },

        /**
         * @return {Point}
         */
        _crossPoint: function (line) {
            var that = this,
                start = that.startPoint,
                end = that.endPoint,
                lineStart = line.startPoint,
                lineEnd = line.endPoint,
                //x = (start.x * (end.y - start.y) * (lineEnd.x - lineStart.x) -
                        //lineStart.x * (lineEnd.y - lineStart.y) *
                        //(end.x - start.x) +
                        //(lineStart.y - start.y) * (end.x - start.x) *
                        //(lineEnd.x - lineStart.x)
                    //) / (
                        //(end.y - start.y) * (lineEnd.x - lineStart.x) -
                        //(lineEnd.y - lineStart.y) * (end.x - start.x)
                    //),
                //y = (end.y - start.y) * (x - start.x) / (end.x - start.x) +
                    //start.y;
                x = end.y.minus(start.y).times(start.x).times(
                            lineEnd.x.minus(lineStart.x)
                        ).minus(
                            lineEnd.y.minus(lineStart.y
                                ).times(lineStart.x
                                ).times(end.x.minus(start.x))
                        ).plus(
                            lineStart.y.minus(start.y
                                ).times(end.x.minus(start.x)
                                ).times(lineEnd.x.minus(lineStart.x))
                        ).div(
                            end.y.minus(start.y
                                ).times(lineEnd.x.minus(lineStart.x)
                                ).minus(
                                    lineEnd.y.minus(lineStart.y
                                        ).times(end.x.minus(start.x))
                                )
                        ),
                y = x.minus(start.x).times(end.y.minus(start.y)
                        ).div(end.x.minus(start.x)).plus(start.y);


            return new Point(x, y);
        },

        /**
         * angle with x arixs
         *
         */
        angleX: function () {
            var that = this,
                start = that.startPoint,
                end = that.endPoint,
                tan = end.y.minus(start.y).div(end.x.minus(start.x)),
                angle = math.atan(tan.toNumber());

            angle = new Decimal(angle + '');

            return angle;
        }

    });

    return Line;

});
