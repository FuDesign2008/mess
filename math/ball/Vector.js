/**
 *
 *
 * @author fuyg
 * @date  2015-03-31
 */
define(function (require) {
    var Class = require('../jtk/Class'),
        Vector = Class.extend({

            constructor: function (startPoint, endPoint) {
                var that = this;
                that.x = endPoint.x.minus(startPoint.x);
                that.y = endPoint.y.minus(startPoint.y);
            },

            isParallel: function (vector) {
                var that = this;
                return that.x.times(vector.y).equals(that.y.times(vector.x));
            }
        });

    return Vector;

});
