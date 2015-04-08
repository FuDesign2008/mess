/**
 *
 *
 * @author fuyg
 * @date  2015-04-07
 */
define(function (require) {
    var Backbone = require('backbone'),
        $ = require('jquery'),
        _ = require('underscore'),
        RandomLetter = require('./RandomLetter'),
        console = require('../jtk/console'),
        GuessLetter = Backbone.View.extend({

            tagName: 'canvas',

            attributes: {
                width: 500,
                height: 300
            },

            initialize: function (options) {
                var that = this;

                that.mountElement = options.mountElement;
                that.guessedLetters = [];
                that.randomLetter = new RandomLetter();

                that._bindEvents();
            },

            render: function () {
                var that = this;
                that.$el.appendTo(that.mountElement);
                that._drawScreen();
            },

            _bindEvents: function () {
                var that = this;

                that._keyPressed = that._keyPressed.bind(that);

                $(document).on('keypress', that._keyPressed);

            },

            _isGameOver: function () {
                var that = this,
                    letter = _.last(that.guessedLetters);

                return that.randomLetter.isEqual(letter);
            },

            _keyPressed: function (event) {
                var that = this,
                    keyCode;

                if (that._isGameOver()) {
                    return;
                }

                keyCode = RandomLetter.parseLetter(event.keyCode);
                that.guessedLetters.push(keyCode);

                that._drawScreen();
            },

            _hintMessage: function () {
                var that = this,
                    randomLetter = that.randomLetter;

                return 'Guess The Letter From ' +
                    String.fromCharCode(randomLetter.start) +
                    '(Lower) to ' +
                    String.fromCharCode(randomLetter.end) + '(Higher)';
            },

            _comparedMessage: function () {
                var that = this,
                    letter = _.last(that.guessedLetters),
                    result = that.randomLetter.compare(letter),
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

            _drawScreen: function () {
                var that = this,
                    canvas = that.el,
                    context = canvas.getContext('2d'),
                    letter = _.last(that.guessedLetters);


                if (letter == null) {
                    that._drawStatic();
                } else {
                    console.log('guessed letter: ' +
                        String.fromCharCode(letter));

                    // message
                    context.fillStyle = '#FFFFAA';
                    context.fillRect(215, 50, 100, 20);
                    context.fillStyle ='#109910';
                    context.font = '14x _sans';
                    context.fillText('Guesses: ' + that.guessedLetters.length,
                            215, 50);

                    // higher or lower
                    context.fillStyle = '#FFFFAA';
                    context.fillRect(150, 125, 300, 20);
                    context.fillStyle ='#000000';
                    context.font = '16x _sans';
                    context.fillText('Higher or Lower: ' +
                            that._comparedMessage(), 150, 125);

                    // guessed letters
                    context.fillStyle = '#FFFFAA';
                    context.fillRect(10, 260, 200, 20);
                    context.fillStyle ='#FF0000';
                    context.font = '16x _sans';
                    context.fillText('Letters Guessed: ' +
                            String.fromCharCode(letter), 10, 260);

                    if (that._isGameOver()) {
                        context.fillStyle = '#FF0000';
                        context.font = '40px _sans';
                        context.fillText('You Got It!', 150, 180);
                    }

                }
            },

            _drawStatic: function () {
                var that = this,
                    canvas = that.el,
                    context = canvas.getContext('2d');

                // background
                context.fillStyle = '#FFFFAA';
                context.fillRect(0, 0, 500, 300);

                //box
                context.strokeStyle = '#000000';
                context.strokeRect(5, 5, 490, 290);
                context.textBaseline = 'top';

                // date
                context.fillStyle = '#000000';
                context.font = '10px _sans';
                context.fillText(new Date(), 150, 10);

                // hint message
                context.fillStyle = '#FF0000';
                context.font = '14px _sans';
                context.fillText(that._hintMessage(), 125, 30);
            }
        });

    return GuessLetter;
});
