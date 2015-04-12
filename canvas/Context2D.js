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
        /**
         * @param {Array}
         *            a 数值
         * @param {Function}
         *            fn 回调函数
         */
        arrEach =  function (a, fn) {
            if (!a.length) {
                return;
            }
            var ret,
                i,
                l = a.length;

            for (i = 0; i < l; i++) {
                ret = fn(a[i], i);
                if (ret === false) {
                    return;
                }
            }
        },
        READONLY = 1,
        BOTH = 2,
        properties = {
            'canvas': READONLY,
            'currentTransform': BOTH,
            'direction': BOTH,
            'fillStyle': BOTH,
            'filter': BOTH,
            'font': BOTH,
            'globalAlpha': BOTH,
            'globalCompositeOperation': BOTH,
            'imageSmoothingEnabled': BOTH,
            'lineCap': BOTH,
            'lineDashOffset': BOTH,
            'lineJoin': BOTH,
            'lineWidth': BOTH,
            'miterLimit': BOTH,
            'shadowBlur': BOTH,
            'shadowColor': BOTH,
            'shadowOffsetX': BOTH,
            'shadowOffsetY': BOTH,
            'strokeStyle': BOTH,
            'textAlign': BOTH,
            'textBaseline': BOTH
        },
        methods = [
            'addHitRegion',
            'arc',
            'arcTo',
            'asyncDrawXULElement',
            'beginPath',
            'bezierCurveTo',
            'clearHitRegions',
            'clearRect',
            'clip',
            'closePath',
            'createImageData',
            'createLinearGradient',
            'createPattern',
            'createRadialGradient',
            'drawFocusIfNeeded',
            'drawImage',
            'drawWindow',
            'ellipse',
            'fill',
            'fillRect',
            'fillText',
            'getImageData',
            'getLineDash',
            'isPointInPath',
            'isPointInStroke',
            'lineTo',
            'measureText',
            'moveTo',
            'putImageData',
            'quadraticCurveTo',
            'rect',
            'removeHitRegion',
            'resetTransform',
            'restore',
            'rotate',
            'save',
            'scale',
            'scrollPathIntoView',
            'setLineDash',
            'setTransform',
            'stroke',
            'strokeRect',
            'strokeText',
            'transform',
            'translate'
        ];

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

        if (properties[property] === BOTH) {
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



    arrEach(methods, function (method) {
        Context2D.prototype[method] = function () {
            var that = this,
                context = that.context;
            context[method].apply(context, arguments);
            return that;
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
