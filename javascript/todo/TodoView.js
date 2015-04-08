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
        TodoView;

    TodoView = Backbone.View.extend({

        tagName: 'li',

        template: _.template($('#item-template').html()),

        events: {
            'click .toggle': 'toggleDone',
            'dblclick .view': 'edit',
            'click a.destroy': 'clear',
            'keypress .edit': 'updateOnEnter',
            'blur .edit': 'close'
        },

        initialize: function () {
            var that = this;

            that.listenTo(that.model, 'change', that.render);
            that.listenTo(that.model, 'destroy', that.remove);

        },

        render: function () {
            var that = this,
                model = that.model;
            that.$el.html(that.template(model.toJSON())).
                toggleClass('done', model.get('done'));

            that.$input = that.$el.find('.edit');

            return that;
        },

        toggleDone: function () {
            var that = this;
            that.model.toggle();
        },

        edit: function () {
            var that = this;
            that.$el.addClass('editing');
            that.$input.focus();

        },

        clear: function () {
            var that = this;
            that.model.destroy();
        },

        updateOnEnter: function (event) {
            var that = this;
            if (event.key === 13) {
                that.close();
            }

        },

        close: function () {
            var that = this,
                value = that.$input.val();
            if (!value) {
                that.clear();
            } else {
                that.$el.removeClass('editing');
                that.model.save({title: value});
            }

        },

    });

    return TodoView;

});
