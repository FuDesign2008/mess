/**
 *
 *
 * @author fuyg
 * @date  2015-03-31
 */
define(function (require) {
    var Base = require('../jtk/Base'),
        Point = require('./Point'),
        Line = require('./Line'),
        _ = require('underscore'),
        Rectangle = Base.extend({

            constructor: function (startPoint, endPoint) {
                var that = this;

                that.startPoint = startPoint;
                that.endPoint = endPoint;
            },

            getPoints: function () {
                var that = this,
                    first,
                    second,
                    third,
                    forth;

                if (!that._points) {
                    first = that.startPoint;
                    third = that.endPoint;
                    second = new Point(third.x, first.y);
                    forth = new Point(first.x, third.y);
                    that._points = [first, second, third, forth];
                }

                return that._points;
            },

            /**
             * @return {Array<Line>}
             */
            getSides: function () {
                var that = this,
                    points;

                if (!that._sides) {
                    points = that.getPoints();
                    that._sides = [
                        new Line(points[0], points[1]),
                        new Line(points[1], points[2]),
                        new Line(points[2], points[3]),
                        new Line(points[3], points[0])
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
             * @param {Line} line
             * @param {Line} [exceptSide]
             * @return {Object|False}
             */
            hitTest: function (line, exceptSide) {
                var that = this,
                    sides = that.getSides(),
                    crossPoint,
                    theSide;

                _.some(sides, function (side) {

                    if (exceptSide === side) {
                        return;
                    }

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
            },

            isPointIn: function (point) {
                var that = this,
                    start = that.startPoint,
                    end = that.endPoint,
                    isIn = function (a, b, p) {
                        return p.x >= a.x && p.y >= a.y &&
                            p.x <= b.x && p.y <= b.y;
                    };
                return isIn(start, end, point) || isIn(end, start, point);
            }
        });


    return Rectangle;

});
