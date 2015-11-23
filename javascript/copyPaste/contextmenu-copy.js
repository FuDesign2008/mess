
/**
 *
 *
 * @author fuyg
 * @date  2015-11-12
 */
define(function (require) {
    'use strict';


    var $ = require('jquery'),
        _ = require('underscore');


    $('#for-click').on('click', function (event) {
        event.preventDefault();

        //
        var success = false,
            body = document.body,
            value = body.contentEditable;

        body.contentEditable = 'true';

        try  {
            document.execCommand('copy');
            success = true;
        } catch (ex) {
            // do nothing
            success = false;
        }


        body.contentEditable = value;

        window.console.log('div copy success: ' + success);

    });

    var $menu = $('#context-menu'),
        $copy = $('#copy'),
        $paste = $('#paste'),
        $forContext = $('#for-context-menu');

    $menu.on('click', function () {
        $menu.hide();
    });

    $copy.on('click', function (event) {
        event.preventDefault();

        var success = false,
            body = document.body,
            value = body.contentEditable;

        body.contentEditable = 'true';

        $forContext.focus();

        try  {
            document.execCommand('copy');
            success = true;
        } catch (ex) {
            // do nothing
            success = false;
        }


        body.contentEditable = value;

        window.console.log('div copy success: ' + success);
    });

    $paste.on('click', function (event) {
        event.preventDefault();

        var success = false,
            body = document.body,
            value = body.contentEditable;

        body.contentEditable = 'true';

        $forContext.focus();

        try  {
            document.execCommand('paste');
            success = true;
        } catch (ex) {
            // do nothing
            success = false;
        }

        body.contentEditable = value;
    });

    $forContext.on('contextmenu', function (event) {
        event.preventDefault();
        $menu.show();
    });


    $(document.body).on('copy', function () {
        window.console.error('document.body on copy!');
    }).on('paste', function (event) {
        event.preventDefault();
        //var clipboardData = event.clipboardData;
        window.console.log(event);
        window.console.error('document.body on paste');
    });





    $('button').on('click', function (event) {
        event.preventDefault();

        var input = document.querySelector('input'),
            success = false;

        input.value = 'text to copy ' + _.uniqueId();
        input.select();

        try  {
            document.execCommand('copy');
            success = true;
        } catch (ex) {
            success = false;
        }

        window.console.log('input copy success: ' + success);
    });



    window.console.log('-----document.queryCommandSupported-------');
    window.console.log('copy: ' +  document.queryCommandSupported('copy'));
    window.console.log('paste: ' +  document.queryCommandSupported('paste'));



});
