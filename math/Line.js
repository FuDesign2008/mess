/**
 *
 *
 * @author fuyg
 * @date  2015-03-31
 */
define(function (require) {

    var Class = require('./jtk/Class'),
        Point = require('./Point'),
        Vector = require('./Vector'),
        Line;

    Line = Class.extend({

        constructor: function (startPoint, endPoint) {
            var that = this;
            // endPoint is greater than startPoint
            if (startPoint.compare(endPoint) === Point.LESS) {
                that.startPoint = startPoint;
                that.endPoint = endPoint;
            } else {
                that.endPoint = startPoint;
                that.startPoint = endPoint;
            }
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
                crossPoint,
                startCompare,
                endCompare;

            if (that.isParallel(line)) {
                return false;
            }

            crossPoint = that._crossPoint(line);

            startCompare = crossPoint.compare(that.startPoint);
            endCompare = crossPoint.compare(that.endPoint);

            if (startCompare !== Point.LESS && endCompare !== Point.GREATE) {
                return crossPoint;
            }

            return false;
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
