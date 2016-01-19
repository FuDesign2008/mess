/**
 *
 *
 * @author fuyg
 * @date  2015-11-29
 */

/*globals $:true*/

$(function () {
    'use strict';

    var $hint = $('#hint'),
        updateHint = function (text) {
            $hint.text(text);
        },
        URL = './get-hint.php';

    $('#input').on('keyup', function () {
        var $el = $(this),
            value = $el.val();

        value = $.trim(value);

        $.ajax({
            type: 'get',
            url: URL,
            data: {
                q: value
            },
            dataType: 'json'
        }).done(function (data){
            var text = '';
            if (data && data.hints && data.hints.length) {
                text = data.hints.join(', ');
            }
            window.console.log(data);
            updateHint(text);
        }).fail(function () {
            window.console.log('ajax failed');
        });
    });

});
