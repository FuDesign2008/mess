/**
 *  为面向对象提供工具, 见Backbone源码
 * @author fuyg@rd.netease.com
 * @date 2011-8-17
 * @time 上午11:16:56
 */



define(function (require) {
    var _ = require('underscore'),
        // Helper function to correctly set up the prototype chain, for
        // subclasses. Similar to `goog.inherits`, but uses a hash of prototype
        // properties and class properties to be extended.
        extend = function (protoProps, staticProps) {
            var parent = this,
                child,
                Surrogate;

            // The constructor function for the new subclass is either defined
            // by you (the "constructor" property in your `extend` definition),
            // or defaulted by us to simply call the parent's constructor.
            if (protoProps && _.has(protoProps, 'constructor')) {
                child = protoProps.constructor;
            } else {
                child = function () { return parent.apply(this, arguments); };
            }

            // Add static properties to the constructor function, if supplied.
            _.extend(child, parent, staticProps);

            // Set the prototype chain to inherit from `parent`, without calling
            // `parent`'s constructor function.
            Surrogate = function () { this.constructor = child; };
            Surrogate.prototype = parent.prototype;
            child.prototype = new Surrogate();

            // Add prototype properties (instance properties) to the subclass,
            // if supplied.
            if (protoProps) {
                _.extend(child.prototype, protoProps);
            }

            // Set a convenience property in case the parent's prototype is
            // needed later.
            /*jshint camelcase: false*/
            child.__super__ = parent.prototype;

            return child;
        };



    function Class(options) {
        var that = this;
        that.options = _.extend({}, options);
        that.initialize.apply(that, arguments);
    }
    Class.prototype.initialize = function () {};

    Class.extend = extend;

    return Class;

});
