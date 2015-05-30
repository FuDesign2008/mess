
/**
 *
 *
 * @author fuyg
 * @date  2015-05-30
 */
define(function () {
    'use strict';

    /*jshint camelcase: false*/
    var CODE_a = 'a'.charCodeAt(0),
        CODE_z = 'z'.charCodeAt(0),
        CODE_A = 'A'.charCodeAt(0),
        CODE_Z = 'Z'.charCodeAt(0),
        OFFSET = CODE_a  - CODE_A;

    return {
        _toCase: function (str, toUpper) {
            str = str + '';
            toUpper = toUpper === true;

            var index,
                len = str.length,
                arr = [],
                code,
                character,
                offset = toUpper ? (0 - OFFSET) : OFFSET,
                codeStart = toUpper ? CODE_a : CODE_A,
                codeEnd = toUpper ? CODE_z : CODE_Z;

            for (index = 0; index < len; index++) {
                code = str.charCodeAt(index);
                if (code >= codeStart && code <= codeEnd) {
                    code = code + offset;
                    character = String.fromCharCode(code);
                } else {
                    character = str.charAt(index);
                }

                arr.push(character);
            }

            return arr.join('');
        },

        toUpperCase: function (str) {
            var that = this;
            return that._toCase(str, true);
        },

        toLowerCase: function (str) {
            var that = this;
            return that._toCase(str, false);
        }
    };
});

