/**
 *
 *
 * @author fuyg
 * @date  2015-04-08
 */
define(function (require) {
    var Backbone = require('backbone'),
        RandomLetter = require('./RandomLetter'),
        Guess = Backbone.Model.extend({

            defaults: function () {
                return {
                    letter: null,
                    counter: 0
                };
            },

            initialize: function () {
                var that = this;
                that.randomLetter = new RandomLetter();
                that.on('change:letter', function () {
                    that.set('counter', that.get('counter') + 1);
                });
            },

            isMatched: function () {
                var that = this,
                    letter = that.get('letter');

                return that.randomLetter.isEqual(letter);
            },

            updateLetter: function (letter) {
                var that = this;

                if (that.isMatched()) {
                    return;
                }

                letter = RandomLetter.parseLetter(letter);
                that.set('letter', letter);
            },

            compare: function () {
                var that = this;
                return that.randomLetter.compare(that.get('letter'));
            },

            hintMsg: function () {
                var that = this,
                    randomLetter = that.randomLetter;

                return 'Guess The Letter From ' +
                    String.fromCharCode(randomLetter.start) +
                    '(Lower) to ' +
                    String.fromCharCode(randomLetter.end) + '(Higher)';
            },

            comparedMsg: function () {
                var that = this,
                    result = that.compare(),
                    msg = 'compare message';

                switch(result) {
                    case RandomLetter.NOT_IN:
                        msg = 'The letter is not in range';
                        break;
                    case RandomLetter.GREATER:
                        msg = 'Higher';
                        break;
                    case RandomLetter.EQUAL:
                        msg = 'Equal';
                        break;
                    case RandomLetter.LESS:
                        msg = 'Lower';
                        break;
                }

                return msg;
            },
        });

    return Guess;
});
