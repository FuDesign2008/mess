
/*globals $:true*/

$(function () {
    'use strict';

    $('button').click(function () {
        var url = 'http://www.world.com/accept.php',
            data = {
                'hello': 'hello to world'
            };
        window.console.log('POST data to : ' + url);
        window.console.log(data);

        $.ajax({
            type: 'post',
            url: url,
            data: data,
            dataType: 'json'
        }).done(function (data) {
            window.console.log('----- data from : ' + url);
            window.console.log(data);
        }).fail(function () {
            window.console.log('failed', arguments);
        });
    });


});
