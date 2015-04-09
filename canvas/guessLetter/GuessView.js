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
        console = require('../jtk/console'),
        GuessView = Backbone.View.extend({

            tagName: 'canvas',

            attributes: {
                width: 500,
                height: 300
            },

            initialize: function () {
                var that = this;

                _.bindAll(that,
                    '_keyPressed',
                    'render'
                );
                that.listenTo(that.model, 'change:letter', that.render);
                $(document).on('keypress', that._keyPressed);

                that.render();
            },

            render: function () {
                var that = this,
                    model = that.model,
                    canvas = that.el,
                    context = canvas.getContext('2d'),
                    letter = model.get('letter');


                if (!letter) {
                    that._drawStatic();
                } else {
                    console.log('guessed letter: ' +
                        String.fromCharCode(letter));

                    // message
                    context.fillStyle = '#FFFFAA';
                    context.fillRect(215, 50, 100, 20);
                    context.fillStyle ='#109910';
                    context.font = '14x _sans';
                    context.fillText('Guesses: ' + model.get('counter'),
                            215, 50);

                    // higher or lower
                    context.fillStyle = '#FFFFAA';
                    context.fillRect(150, 125, 300, 20);
                    context.fillStyle ='#000000';
                    context.font = '16x _sans';
                    context.fillText('Higher or Lower: ' +
                            model.comparedMsg(), 150, 125);

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

            _isGameOver: function () {
                return this.model.isMatched();
            },

            _keyPressed: function (event) {
                var that = this;
                that.model.updateLetter(event.keyCode);
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
                context.fillText(that.model.hintMsg(), 125, 30);
            }
        });

    return GuessView;
});
