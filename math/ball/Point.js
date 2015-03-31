/**
 *
 *
 * @author fuyg
 * @date  2015-03-31
 */
define(function (require) {

    var Class = require('../jtk/Class'),
        Decimal = require('./decimal'),
        Point = Class.extend({

            constructor: function (x, y) {
                var that = this;
                that.x = new Decimal(x);
                that.y = new Decimal(y);
            },

            createWithDistance: function (distanceX, distanceY) {
                var that = this,
                    x = that.x.plus(distanceX),
                    y = that.y.plus(distanceY);

                return new Point(x, y);
            },

            compare: function (point) {
                var that = this;

                if (that.x.equals(point.x) && that.y.equals(point.y)) {
                    return Point.EQUAL;
                }

                if (that.x.greaterThanOrEqualTo(point.x) &&
                        that.y.greaterThanOrEqualTo(point.y)) {
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
                return new Point(new Decimal(that.x), new Decimal(that.y));
            }

        }, {
            GREATER: 1,
            EQUAL: 2,
            LESS: 3
        });

    return Point;

});
