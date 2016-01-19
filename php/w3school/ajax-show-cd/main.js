/**
 *
 *
 * @author fuyg
 * @date  2015-11-30
 */

/*globals $:true, _:true*/

$(function () {

    'use strict';

    var getSid = function () {
            return Math.round(Math.random() * 1000000);
        },
        $hint = $('#hint'),
        updateHint = function (html) {
            $hint.html(html);
        };

    $('#cds').change(function () {
        var $el = $(this),
            value = $el.val();

        $.ajax({
            type: 'get',
            url: './get-cd.php',
            data: {
                q: value,
                sid: getSid()
            },
            dataType: 'json'
        }).done(function (data) {
            if (data && data.cds) {
                var cdInfo = data.cds[0],
                    html = [];
                _.each(cdInfo, function (value, key) {
                    html.push(key + ': ' + value);
                });
                html = '<div>' + html.join('</div><div>') + '</div>';
                updateHint(html);
            } else {
                updateHint('');
            }
        }).fail(function () {
            updateHint('');
        });
    });


});
