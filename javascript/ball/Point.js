/**
 *
 *
 * @author fuyg
 * @date  2015-03-31
 */
define(function (require) {

    var Class = require('../jtk/Class'),
        Point = Class.extend({

            constructor: function (x, y) {
                var that = this;
                that.x = x;
                that.y = y;
            },

            createWithDistance: function (distanceX, distanceY) {
                var that = this,
                    x = that.x + distanceX,
                    y = that.y + distanceY;

                return new Point(x, y);
            },

            compare: function (point) {
                var that = this;

                if (that.x === point.x && that.y === point.y) {
                    return Point.EQUAL;
                }

                if (Math.pow(that.x, 2) + Math.pow(that.y, 2) >
                        Math.pow(point.x, 2) + Math.pow(point.y, 2) ) {
                    return Point.GREATER;
                }

                return Point.LESS;
            },

            isEqual: function (point) {
                var that = this;
                return that.compare(point) === Point.EQUAL;
            },

            clone: function () {
                var that = this;

                return new Point(that.x, that.y);
            }

        }, {
            GREATER: 1,
            EQUAL: 2,
            LESS: 3
        });

    return Point;

});
