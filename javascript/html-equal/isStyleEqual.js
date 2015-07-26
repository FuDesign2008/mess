/**
 *
 *
 * @author fuyg
 * @date  2015-07-26
 */
define(function (require) {

    'use strict';

    var _ = require('underscore'),
        parseStyle = function (styleText) {
            var index = styleText.indexOf(':'),
                name = styleText.substring(0, index),
                value = styleText.substring(index+1);
            name = name.trim();
            value = value.trim();
            if (name && value) {
                return {
                    name: name,
                    value: value
                };
            }
        },

        parseCssText = function (cssText) {
            if (!cssText) {
                return;
            }
            cssText = cssText.replace(/\s*;$/, '');
            var arr = cssText.split('\s*;'),
                styles;

            _.each(arr, function (item) {
                var parsed = parseStyle(item);
                if (parsed) {
                    styles = styles || {};
                    styles[parsed.name] = parsed.vlaue;
                }
            });

            return styles;
        },

        handlers = {
            'font-family': function (value) {
                var newValue = [];

                value = value.split(/\s*,\s*/);

                _.each(value, function (val) {
                    val = val.trim().replace(/^['"]/, '').replace(/['"]$/, '');
                    val = val.replace(/\s+/, ' ');
                    if (val) {
                        newValue.push(val);
                    }
                });

                newValue = newValue.join('');

                return newValue;
            }

        },

        isValueEqual = function (name, valueA, valueB) {
            var handler = handlers[name];
            if (handler) {
                valueA = handler(valueA);
                valueB = handler(valueB);
            }

            return valueA === valueB;
        };

    /**
     *
     */
    return function (nodeA,  nodeB) {
        var cssTextA = nodeA.cssText || '',
            cssTextB = nodeB.cssText || '',
            stylesA,
            stylesB,
            isEqual;

        cssTextA = cssTextA.trim();
        cssTextB = cssTextB.trim();

        if (cssTextA === cssTextB) {
            return true;
        } else if (!cssTextA) {
            return false;
        } else if (!cssTextB) {
            return false;
        }

        stylesA = parseCssText(cssTextA);
        stylesB = parseCssText(cssTextB);

        if (!(stylesA && stylesB)) {
            return !stylesA && !stylesB;
        }

        isEqual = true;
        _.some(stylesA, function (value, name) {
            var valueB = stylesB[name];
            if (value === valueB) {
                return;
            }

            if (!valueB) {
                isEqual = false;
                return true;
            }
            if (!isValueEqual(name, value, valueB)) {
                isEqual = false;
                return true;
            }
        });

        return isEqual;

    };
});
