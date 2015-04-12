/**
 *
 *
 * @author fuyg
 * @date  2015-04-12
 */
define(function (require) {
    var _ = require('underscore'),
        $ = require('jquery'),
        Class = require('./jtk/Class'),
        Context2D,
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
        ],
        proto = {

            /**
             * @param {HTMLCanvasElement|Context} context
             */
            constructor: function (context) {
                var that = this;

                if (context.getContext) {
                    that.context = context.getContext('2d');
                } else if (context.canvas) {
                    that.context = context;
                } else {
                    throw 'Failed to create Canvas2D object: ' +
                        'argaument canvas is unvalid!';
                }
                return that;
            },

            _set: function (property, value) {
                var that = this;

                if (properties[property] === BOTH) {
                    that.context[property] = value;
                }
            },

            attr: function (property, value) {
                var that = this;
                if (arguments.length === 1) {
                    // getter
                    if (_.isString(property) &&
                            properties[property] != null) {
                        return that.context[property];
                    }
                    // setter
                    if (_.isObject(property)) {
                        _.each(property, function (val, name) {
                            that._set(name, val);
                        });
                     }
                } else if (arguments.length === 2) { // setter
                    that._set(property, value);
                }

                return that;
            }

        };


    _.each(methods, function (method) {

        proto[method] = function () {
            var that = this,
                context = that.context;
            context[method].apply(context, arguments);
            return that;
        };

    });



    Context2D = Class.extend(proto, {

        /**
         * @param {String|HTMLCanvasElement|Context}
         */
        create: function (canvas) {
            var context2d;

            if (_.isString(canvas)) {
                canvas = $(canvas).get(0);
            }

            if (!canvas) {
                return;
            }

            context2d = new Context2D(canvas);
            return context2d;
        }
    });

    return Context2D;
});
