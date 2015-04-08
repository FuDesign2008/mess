/**
 * Todo Model
 *
 * @author fuyg
 * @date  2015-04-08
 */
define(function (require) {
    var Backbone = require('backbone'),
        Todo = Backbone.Model.extend({

            defaults: {
                title: 'empty todo...',
                order: 0,
                done: false
            },

            /**
             * @param {Object} options
             * @param {Object} options.title
             * @param {Object} options.order
             */
            initialize: function (options) {
                var that = this;
                that.set({
                    title: options.title,
                    order: options.order
                });
            },

            toggle: function () {
                var that = this;
                that.save('done', !that.get('done'));
            }
        });

    return Todo;
});
