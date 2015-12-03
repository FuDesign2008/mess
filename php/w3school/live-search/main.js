
/*globals $:true, _: true*/

$(function () {

    'use strict';

    var $result = $('#result'),
        updateResult = function (html) {
            $result.html(html);
        },
        handleSuggests = function (suggests) {
            var html = [];
            _.each(suggests, function (suggest) {
                html.push('<p><a target="_blank" href="' + suggest.url + '">' +
                          suggest.title + '</a></p>');
            });

            html = html.join('');

            updateResult(html);
        };

    $('#search').on('keyup', function () {
        var text = $(this).val();

        text = $.trim(text);
        if (!text) {
            updateResult('');
            return;
        }

        $.ajax({
            url: './search-suggest.php',
            type: 'get',
            data: {
                q: text,
                sid: _.uniqueId()
            },
            dataType: 'json'
        }).done(function (data) {
            if (data && data.suggests && data.suggests.length) {
                handleSuggests(data.suggests);
            } else {
                updateResult('');
            }
        }).fail(function () {
            updateResult('');
        });

    });

});
