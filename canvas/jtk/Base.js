/**
 *
 *
 * @author fuyg
 * @date  2015-03-30
 */
define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        Class = require('./Class'),
        proto = _.extend({}, Backbone.Events),
        Base = Class.extend(proto);

        return Base;
});
