/**
 *
 *
 * @author fuyg
 * @date  2015-03-31
 */
define(function (require) {
    var Base = require('../jtk/Base'),
        //console = require('../jtk/console'),
        Point = require('./Point'),
        Line = require('./Line'),
        Rectangle = Base.extend({

            constructor: function (startPoint, endPoint) {
                var that = this;

                // endPoint greater that startPoint
                if (startPoint.compare(endPoint) === Point.LESS) {
                    that.startPoint = startPoint;
                    that.endPoint = endPoint;
                } else {
                    that.startPoint = endPoint;
                    that.endPoint = startPoint;
                }
            },

            /**
             * @return {Array<Line>}
             */
            getSides: function () {
                var that = this,
                    first = that.startPoint,
                    second,
                    third = that.endPoint,
                    forth;

                if (!that._sides) {
                    second = new Point(third.x, first.y);
                    forth = new Point(first.x, third.y);
                    that._sides = [
                        new Line(first, second),
                        new Line(second, third),
                        new Line(third, forth),
                        new Line(forth, first)
                    ];
                }

                return that._sides;
            },

            width: function () {
                var that = this,
                    sides = that.getSides(),
                    line = sides[0];
                return line.getLength();
            },

            height: function () {
                var that = this,
                    sides = that.getSides(),
                    line = sides[1];
                return line.getLength();
            },

            /**
             *
             * @return {Object|False}
             */
            hitTest: function (line) {
                var that = this,
                    sides = that.getSides(),
                    crossPoint,
                    theSide;

                sides.some(function (side) {
                    var point = line.hitTest(side);
                    if (point) {
                        crossPoint = point;
                        theSide = side;
                        return true;
                    }
                });

                if (!crossPoint) {
                    return false;
                }

                return {
                    point: crossPoint,
                    line: theSide
                };

            }

        });


    return Rectangle;

});
