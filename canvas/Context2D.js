/**
 *
 * Context2D.js
 *
 * http://github.com/FuDesign2008/Context2D
 *
 * @author FuDesign2008@163.com
 * @date  2015-04-12
 */

(function(root, factory) {

    'use strict';

    if (typeof exports === 'object' && typeof require === 'function') {
        /*global module*/
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function() {
            return factory();
        });
    } else {
        root.Context2D = factory();
    }
})(this, function () {

    'use strict';


    var TO_STRING = Object.prototype.toString,
        isString = function (obj) {
            return obj == null ? false :
                TO_STRING.call(obj) === '[object String]';
        },
        isObject = function (obj) {
            return obj == null ? false :
                TO_STRING.call(obj) === '[object Object]';
        },
        /**
         * 类似each, fn的执行值为false时，不再继续进行
         * @param {Object} obj
         * @param {Function} fn
         *
         */
        objEach = function (obj, fn) {
            var ret, prop;
            if (!isObject(obj) || !obj.hasOwnProperty) {
                return;
            }
            for (prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    ret = fn(obj[prop], prop);
                    if (ret === false) {
                        return;
                    }
                }
            }
        },
        properties = {
            // is readonly or not
            'canvas': true,
            'currentTransform': false,
            'direction': false,
            'fillStyle': false,
            'filter': false,
            'font': false,
            'globalAlpha': false,
            'globalCompositeOperation': false,
            'imageSmoothingEnabled': false,
            'lineCap': false,
            'lineDashOffset': false,
            'lineJoin': false,
            'lineWidth': false,
            'miterLimit': false,
            'shadowBlur': false,
            'shadowColor': false,
            'shadowOffsetX': false,
            'shadowOffsetY': false,
            'strokeStyle': false,
            'textAlign': false,
            'textBaseline': false
        },
        methods = {
            // is getter or not
            'addHitRegion': false,
            'arc': false,
            'arcTo': false,
            'asyncDrawXULElement': false,
            'beginPath': false,
            'bezierCurveTo': false,
            'clearHitRegions': false,
            'clearRect': false,
            'clip': false,
            'closePath': false,
            'createImageData': false,
            'createLinearGradient': false,
            'createPattern': false,
            'createRadialGradient': false,
            'drawFocusIfNeeded': false,
            'drawImage': false,
            'drawWindow': false,
            'ellipse': false,
            'fill': false,
            'fillRect': false,
            'fillText': false,
            'getImageData': true,
            'getLineDash': true,
            'isPointInPath': false,
            'isPointInStroke': false,
            'lineTo': false,
            'measureText': false,
            'moveTo': false,
            'putImageData': false,
            'quadraticCurveTo': false,
            'rect': false,
            'removeHitRegion': false,
            'resetTransform': false,
            'restore': false,
            'rotate': false,
            'save': false,
            'scale': false,
            'scrollPathIntoView': false,
            'setLineDash': false,
            'setTransform': false,
            'stroke': false,
            'strokeRect': false,
            'strokeText': false,
            'transform': false,
            'translate': false
        };

    /**
     * @param {Context} context
     */
    function Context2D (context) {
        var that = this;
        that.context = context;
        return that;
    }

    Context2D.prototype._set = function (property, value) {
        var that = this;

        if (properties[property] === false) {
            that.context[property] = value;
        }
    };

    Context2D.prototype.attr = function (property, value) {
        var that = this;
        if (arguments.length === 1) {
            // getter
            if (isString(property) && properties[property] != null) {
                return that.context[property];
            }
            // setter
            if (isObject(property)) {
                objEach(property, function (val, name) {
                    that._set(name, val);
                });
             }
        } else if (arguments.length === 2) { // setter
            that._set(property, value);
        }

        return that;
    };



    objEach(methods, function (isGetter, method) {
        Context2D.prototype[method] = function () {
            var that = this,
                context = that.context,
                ret = context[method].apply(context, arguments);
            return isGetter ? ret : that;
        };
    });

    /**
     * @param {HTMLCanvasElement|Context}
     */
    Context2D.create = function (context) {
        var context2d;

        if (context.getContext) {
            context = context.getContext('2d');
        } else if (context.canvas) {
            context = context;
        } else {
            throw 'Failed to create Canvas2D object: ' +
                'argument context is unvalid!';
        }

        context2d = new Context2D(context);
        return context2d;
    };

    return Context2D;
});
