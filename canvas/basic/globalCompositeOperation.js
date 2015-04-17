/**
 *
 *
 * @author fuyg
 * @date  2015-04-16
 */
define(function () {

    return function (context, width, height) {

        var that = this,
            values = [
                'copy',
                'destination-atop',
                'destination-in',
                'destination-out',
                'destination-over',
                'lighter',
                'source-atop',
                'source-in',
                'source-out',
                'source-over',
                'xor'
            ],
            x = 250,
            y = 50,
            w = 150,
            h = 150,
            timeout = 100 * 30,
            index = 0,
            imgData = context.getImageData(0, 0, width, height),
            draw = function () {
                var val = values[index];
                if (!val) {
                    that.trigger('finish');
                    return;
                }

                context.putImageData(imgData, 0, 0).
                    attr({
                        globalCompositeOperation: val
                    }).fillRect(x, y, w, h).
                    attr('globalCompositeOperation', 'source-over').
                    strokeRect(x, y, w, h).
                    fillText(val, x, y - 20);

                index++;
                window.setTimeout(draw, timeout);
            };

        context.attr({
            fillStyle: '#FF00FF',
            font: '24px serif',
            lineWidth: 1
        });

        draw();
    };
});
