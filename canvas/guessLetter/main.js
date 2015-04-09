/**
 *
 *
 * @author fuyg
 * @date  2015-04-07
 */
define(function (require) {
    var console = require('../jtk/console'),
        $ = require('jquery'),
        Modernizr = require('Modernizr'),
        //GuessLetter = require('./GuessLetter'),
        GuessView = require('./GuessView'),
        Guess = require('./Guess');

    if (!Modernizr.canvas) {
        console.log('Your browser does not support canvas!');
        return;
    }

    $(function () {
        //var guessLetter = new GuessLetter({
            //mountElement: document.querySelector('#canvas-wrapper')
        //});

        //console.log('to render guess letter!');
        //guessLetter.render();


        var guess = new Guess(),
            guessView = new GuessView({
                model: guess
            });

        guessView.$el.prependTo('#canvas-wrapper');
    });

});
