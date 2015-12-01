
/**
 *
 *
 * @author fuyg
 * @date  2015-12-01
 */

/*globals $:true, _:true*/

$(function () {
    'use strict';

    var URL = './get-user-info.php',
        $hint = $('#hint'),
        updateHint = function (html) {
            $hint.html(html);
        };

    $('#users').change(function () {
        var $this = $(this),
            value = $this.val();

        $.ajax({
            type: 'get',
            url: URL,
            data: {
                q: value,
                sid: _.uniqueId()
            },
            dataType: 'json'
        }).done(function (data) {
            if (data && data.userInfo) {
                var html = _.map(data.userInfo, function (value, key) {
                        return key + ': ' + value;
                    });
                html = '<p>' + html.join('</p><p>') + '</p>';
                updateHint(html);
            } else {
                updateHint('');
            }

        }).fail(function () {
            updateHint('');
        });

    });

});
