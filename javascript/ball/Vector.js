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
                that.x = endPoint.x - startPoint.x;
                that.y = endPoint.y - startPoint.y;
            },

            isParallel: function (vector) {
                var that = this;
                return that.x * vector.y === that.y * vector.x;
            }
        });

    return Vector;

});
