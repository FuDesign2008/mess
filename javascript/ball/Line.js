/**
 * 有方向的直线
 *
 * @author fuyg
 * @date  2015-03-31
 */
define(function (require) {

    var Class = require('../jtk/Class'),
        console = require('../jtk/console'),
        Point = require('./Point'),
        Vector = require('./Vector'),
        Line;

    Line = Class.extend({

        constructor: function (startPoint, endPoint) {
            var that = this;

            that.startPoint = startPoint;
            that.endPoint = endPoint;
        },

        getLength: function () {
            var that = this,
                start,
                end;

            if (!that._length) {
                start = that.startPoint;
                end = that.endPoint;
                that._length = Math.sqrt(Math.pow(end.y - start.y, 2) +
                    Math.pow(end.x - start.x, 2));
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

            if (that.isInClosedLine(crossPoint) &&
                    line.isInClosedLine(crossPoint)) {
                return crossPoint;
            }

            return false;
        },

        isInClosedLine: function (point) {
            var that = this,
                len = that.getLength(),
                startPart = new Line(that.startPoint, point),
                endPart = new Line(point, that.endPoint),
                sum = startPart.getLength() + endPart.getLength(),
                result = Math.abs(sum - len);

            return result < 0.0001;
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
                x = (start.x * (end.y - start.y) * (lineEnd.x - lineStart.x) -
                        lineStart.x * (lineEnd.y - lineStart.y) *
                        (end.x - start.x) +
                        (lineStart.y - start.y) * (end.x - start.x) *
                        (lineEnd.x - lineStart.x)
                    ) / (
                        (end.y - start.y) * (lineEnd.x - lineStart.x) -
                        (lineEnd.y - lineStart.y) * (end.x - start.x)
                    ),
                y = (end.y - start.y) * (x - start.x) / (end.x - start.x) +
                    start.y;

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
                angle = Math.atan((end.y - start.y) / (end.x - start.x));

            return angle;
        }

    });

    return Line;

});
