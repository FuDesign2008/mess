/**
 *
 *
 * @author fuyg
 * @date  2015-04-07
 */
define(function (require) {
    var Class = require('../jtk/Class'),
        console = require('../jtk/console'),
        _ = require('underscore'),
        RandomLetter = Class.extend({

            /**
             * @param {Char} start
             * @param {Char} end
             */
            constructor: function (start, end) {
                var that = this;

                start = (start || 'a').toLowerCase();
                end = (end || 'z').toLowerCase();

                start = start.charCodeAt(0);
                end = end.charCodeAt(0);

                that.letterCode = Math.floor(Math.random() * (end - start)) +
                    start;
                that.start = start;
                that.end = end;

                console.log('the letter: ' +
                    String.fromCharCode(that.letterCode));
            },

            /**
             * @param {Char|Integer}
             */
            isEqual: function (letter) {
                var that = this;

                return that.compare(letter) === RandomLetter.EQUAL;
            },

            /**
             * @return {Integer}
             */
            compare: function (letter) {
                var that = this;

                letter = RandomLetter.parseLetter(letter);

                if (letter == null || letter < that.start ||
                        letter > that.end) {
                    return RandomLetter.NOT_IN;
                }

                if (letter > that.letterCode) {
                    return RandomLetter.GREATER;
                }

                if (letter < that.letterCode) {
                    return RandomLetter.LESS;
                }

                return RandomLetter.EQUAL;

            }

        }, {

            NOT_IN: 1,

            GREATER: 2,

            EQUAL: 3,

            LESS: 4,

            /**
             * return the char code of lowercase
             * @param {Char|Integer}
             * @return {Integer}
             */
            parseLetter: function (letter) {
                if (letter == null) {
                    return;
                }

                if (!_.isString(letter)) {
                    letter = String.fromCharCode(letter);
                }

                letter = (letter.toLowerCase()).charCodeAt(0);

                return letter;
            }
        });

    return RandomLetter;
});
