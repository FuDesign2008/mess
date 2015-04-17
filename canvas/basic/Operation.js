
/**
 *
 *
 * @author fuyg
 * @date  2015-04-17
 */
define(function (require) {
    var _ = require('underscore'),
        Base = require('../jtk/Base'),
        Operation;

    Operation = Base.extend({

        constructor: function (fn) {
            var that = this;
            that._fn = fn;
        },
        execute: function () {
            var that  = this;
            that._fn.apply(that, arguments);
        }
    }, {
        create: function (fn) {
            if (!_.isFunction(fn)) {
                return;
            }
            return new Operation(fn);
        }
    });

    return Operation;
});
