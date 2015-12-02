
/**
 *
 *
 * @author fuyg
 * @date  2015-12-01
 */

/*globals $:true, _:true*/

$(function () {
    'use strict';

    var isXml = Math.random() > 0.5,
    //var isXml = true,
        URL = './get-user-info.php',
        $hint = $('#hint'),
        updateHint = function (html) {
            $hint.html(html);
        },
        handleJsonData = function (data) {
            if (data && data.userInfo) {
                var html = _.map(data.userInfo, function (value, key) {
                        return key + ': ' + value;
                    });
                html = '<p>' + html.join('</p><p>') + '</p>';
                updateHint(html);
            } else {
                updateHint('');
            }
        },
        handleXmlData = function (data) {
            var html = [];

            updateHint('');
            $(data).find('userInfo').children().each(function () {
                html.push(this.tagName + ': ' + $(this).text());
            });

            html = '<p>' + html.join('</p><p>') + '</p>';
            updateHint(html);
        },
        dataType = isXml ? 'xml' : 'json',
        handleData = isXml ? handleXmlData : handleJsonData;

    window.console.log('is xml: ' + isXml);

    $('#users').change(function () {
        var $this = $(this),
            value = $this.val();

        $.ajax({
            type: 'get',
            url: URL,
            data: {
                q: value,
                isXml: isXml,
                sid: _.uniqueId()
            },
            dataType: dataType
        }).done(handleData).fail(function () {
            updateHint('');
        });

    });

});
