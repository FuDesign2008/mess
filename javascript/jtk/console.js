/**
 * A simple console object for debug, only has these properties:
 *  + DEBUG
 *  + log(arg1, arg2, ...)
 *  + warn(arg1, arg2, ...)
 *  + error(arg1, arg2, ...)
 *
 *  Use `window.DEBUG` or `global.DEBUG` to open/close debug mode.
 *  It's safe to let statements like `console.log("something");` online for
 *  the methods do nothing when `window.DEBUG` is equal false.
 *
 * If you want to an advanced one, you can use a dapter to rewrite it.
 *
 * Please Make sure this module is *independent* and *simple*.
 *
 * @author FuDesign2008@163.com
 * @date   2013-12-17
 * @time   下午12:17:24
 */




define(function () {

    'use strict';

    var global = window,
        nativeConsole,
        noop = function () {},
        retObj = {
            DEBUG: false,
            log: noop,
            warn: noop,
            error: noop
        };
    // If not in debug mode, just return
    if (global.DEBUG !== true) {
        return retObj;
    }
    if (global.console && global.console.log) {
        nativeConsole = global.console;
    } else {
        //If has no native `console`, do not use debug mode
        return retObj;
    }

    retObj.DEBUG = true;

    // `...log.bind..` can print message with line number
    if (nativeConsole.log && nativeConsole.log.bind) {
        retObj.log = nativeConsole.log.bind(nativeConsole);
        retObj.warn = nativeConsole.warn.bind(nativeConsole);
        retObj.error = nativeConsole.error.bind(nativeConsole);
        return retObj;
    }


    /**
     */
    retObj.log = function () {
        var index,
            len = arguments.length;
        for (index = 0; index < len; index++) {
            nativeConsole.log(arguments[index]);
        }
    };
    /**
     */
    retObj.warn = function () {
        var index,
            len = arguments.length;
        for (index = 0; index < len; index++) {
            nativeConsole.warn(arguments[index]);
        }
    };
    /**
     */
    retObj.error = function () {
        var index,
            len = arguments.length;
        for (index = 0; index < len; index++) {
            nativeConsole.error(arguments[index]);
        }
    };

    return retObj;

});

