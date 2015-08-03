/**
 *  为面向对象提供工具, 见Backbone源码
 * @author FuDesign2008@163.com
 * @date 2011-8-17
 * @time 上午11:16:56
 */



define(function (require) {

    'use strict';

    var _ =  require('underscore'),
        Backbone = require('backbone');

    function Class(options) {
        var that = this;
        that.options = _.extend({}, options);
        that.initialize.apply(that, arguments);
    }

    Class.prototype.initialize = function () {};

    Class.extend = Backbone.Model.extend;

    return Class;

});
