/**
 *
 *
 * @author fuyg
 * @date  2015-04-08
 */
define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        TodoView = require('./TodoView'),
        TodoList = require('./TodoList'),
        AppView;

    AppView = Backbone.View.extend({

        className: 'todoapp',

        template: _.template($('#app-template').html()),

        statsTemplate: _.template($('#stats-template').html()),

        events: {
            'keypress .new-todo': 'createOnEnter',
            'click .clear-completed': 'clearCompleted',
            'click .toggle-all': 'toggleAllComplete'
        },

        initialize: function () {
            var that = this,
                todoList = new TodoList();

            that.$el.html(that.template({}));

            that.$input = that.$('.new-todo');
            that.$allCheckbox = that.$('.toggle-all')[0];

            that.todoList = todoList;

            that.listenTo(todoList, 'add', that.addOne);
            that.listenTo(todoList, 'reset', that.addAll);
            that.listenTo(todoList, 'all', that.render);

            that.$footer = that.$('footer');
            that.$main = that.$('.main');

            that.todoList.fetch();
        },

        render: function () {
            var that = this,
                todoList = that.todoList,
                doneCounter = todoList.done().length,
                remainingCounter = todoList.remaining().length;

            if (todoList.length) {
                that.$main.show();
                that.$footer.html(that.statsTemplate({
                    done: doneCounter,
                    remaining: remainingCounter
                })).show();
            } else {
                that.$main.hide();
                that.$footer.hide();
            }

            that.$allCheckbox.checked = !remainingCounter;
        },

        addOne: function (todo) {
            var that = this,
                todoView = new TodoView({model: todo});
            todoView.render();
            that.$('.todo-list').append(todoView.el);
        },

        addAll: function () {
            var that = this;
            that.todoList.each(that.addOne, that);
        },

        createOnEnter: function (event) {
            var that = this,
                todoList = that.todoList,
                value;

            if (event.keyCode !== 13) {
                return;
            }

            value = that.$input.val();
            if (!value) {
                return;
            }

            todoList.create({
                title: value,
                order: todoList.nextOrder()
            });

            that.$input.val('');

        },

        clearCompleted: function () {
            var that = this;
            _.invoke(that.todoList.done(), 'destroy');
            return false;
        },

        toggleAllComplete: function () {
            var that = this,
                done = that.$allCheckbox.checked;
            that.todoList.each(function (todo) {
                todo.save({
                    'done': done
                });
            });

        }
    });

    return AppView;
});
