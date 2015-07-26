/**
 *
 *
 * @author fuyg
 * @date  2015-07-26
 */
define(function () {

    'use strict';

    /**
     *
     */
    return function (nodeA,  nodeB) {
        var classA = nodeA.className || '',
            classB = nodeB.className || '';

        classA = classA.trim();
        classB = classB.trim();

        if (classA === classB) {
            return true;
        }

        classA = classA.split(/\s+/);
        classB = classB.split(/\s+/);

        if (classA.length !== classB.length) {
            return false;
        }

        classA = classA.sort().join(' ');
        classB = classB.sort().join(' ');

        return classA === classB;
    };
});
