'use strict';

var COUNT = 500;
var G = -0.1;
var F = -0.04;
var $ = window.$;
var circleList = {};

function init() {
    for (var i = 1; i <= COUNT; i++) {
        var d = Math.random() * 2 * Math.PI;
        var v = Math.random() * 5;
        var circle = $('<div class="circle"></div>').get(0);
        $('.main').append(circle);
        circleList[i] = {
            el: circle,
            x: 250,
            y: 250,
            d: d,
            v: v
        };
    }
}

var requstId = null;

function updateCircle() {
    var circle;
    for (var i = 1; i <= COUNT; i++) {

        circle = circleList[i];

        var x = circle.x;
        var y = circle.y;
        var d = circle.d;
        var v = circle.v;
        var cosd = Math.cos(d);
        var sind = Math.sin(d);

        var vx = v * cosd;
        var vy = v * sind;

        if (Math.abs(vx) < 1e-9) {
            vx = 0;
        }

        vx += F * cosd;
        vy += F * sind + G;
        v = Math.sqrt(vx * vx + vy * vy);

        if (vy > 0) {
            d = Math.acos(vx / v);
        } else {
            d = -Math.acos(vx / v);
        }

        x += vx;
        y += vy;

        circle.x = x;
        circle.y = y;
        circle.d = d;
        circle.v = v;

        circle.el.style.transform = 'translate(' + x +'px, ' + (400-y) + 'px)';
    }

    requstId = requestAnimationFrame(updateCircle);
}

function showAnimation() {
    $('.main').html('');
    init();
    cancelAnimationFrame(requstId);
    updateCircle();
}


$('button').onclick = showAnimation;
