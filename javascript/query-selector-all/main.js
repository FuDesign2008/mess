/**
 *
 *
 * @author fuyg
 * @date  2015-12-27
 */
define(function () {
    'use strict';

    var pList = document.body.querySelectorAll('p'),
        lastP;

    window.console.log('[querySelectorAll] p list length: ' + pList.length);
    window.console.log('remove last p');
    lastP = pList[pList.length - 1];
    lastP.parentNode.removeChild(lastP);
    window.console.log('[querySelectorAll] p list length: ' + pList.length);


    pList = document.getElementsByTagName('p');
    window.console.log('[getElementsByTagName] p list length: ' + pList.length);
    window.console.log('remove last p');
    lastP = pList[pList.length - 1];
    lastP.parentNode.removeChild(lastP);
    window.console.log('[getElementsByTagName] p list length: ' + pList.length);



});
