/**
 *
 *
 * @author fuyg
 * @date  2015-04-08
 */
define(function (require) {
    var Backbone = require('backbone'),
        Todo = require('./Todo'),
        TodoList;

    require('./backbone.localStorage');

    TodoList = Backbone.Collection.extend({

        model: Todo,

        localStorage: new Backbone.LocalStorage('todos-backbone'),

        done: function () {
            var that = this;

            return that.filter(function (todo) {
                return todo.get('done');
            });
        },

        remaining: function () {
            var that = this;
            return that.without.apply(that, that.done());
        },

        nextOrder: function () {
            var that = this;
            if (!that.length) {
                return 1;
            }
            return that.last().get('order') + 1;
        },

        comparator: function (todo) {
            return todo.get('order');
        }

    });

    return TodoList;
});
