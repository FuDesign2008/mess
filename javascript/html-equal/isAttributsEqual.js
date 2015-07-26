/**
 *
 *
 * @author fuyg
 * @date  2015-07-26
 */
define(function () {

    'use strict';

    var SPECIAL_ATTRS = [
        'style',
        'class'
    ];

    /**
     *
     */
    return function (nodeA,  nodeB) {
        var attrsA = nodeA.attributes,
            attrsB = nodeB.attributes,
            index,
            len = attrsA.length,
            attrNodeA,
            name,
            valueA,
            valueB;

        if (attrsA.length !== attrsB.length) {
            return false;
        }

        len = attrsA.length;

        for (index = 0; index < len; index++) {
            attrNodeA = attrsA[index];
            name = attrNodeA.name;

            if (SPECIAL_ATTRS.indexOf(name) === -1) {
                valueA = attrNodeA.nodeValue;
                valueB = nodeB.getAttribute(name);

                if (valueA !== valueB) {
                    return false;
                }
            }
        }

        return true;
    };
});
