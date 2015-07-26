/**
 *
 *
 * @author fuyg
 * @date  2015-07-26
 */
define(function (require) {
    'use strict';
    var _ = require('underscore'),
        PARSE_HTML = require('jtk/web/dom/parseHTML'),
        IS_ATTRIBUTES_EQUAL = require('./isAttributsEqual'),
        IS_CLASS_EQUAL = require('./isClassEqual'),
        IS_STYLE_EQUAL = require('./isStyleEqual'),
        NODE_TYPE = require = require('jtk/web/dom/nodeType'),
        isDomEqual = function (nodeA, nodeB) {
            if (!nodeA || !nodeB) {
                return false;
            }

            if (nodeA.nodeType !== nodeB.nodeType) {
                return false;
            }

            if (nodeA.nodeType === NODE_TYPE.TEXT_NODE) {
                return nodeA.nodeValue === nodeB.nodeValue;
            }

            if (nodeA.nodeType !== NODE_TYPE.ELEMENT_NODE) {
                return true;
            }

            // compare attributes
            var isEqual = IS_ATTRIBUTES_EQUAL(nodeA, nodeB),
                isTextOrElementNode = function (node) {
                    return node.nodeType === NODE_TYPE.TEXT_NODE ||
                        node.nodeType === NODE_TYPE.ELEMENT_NODE;
                },
                childrenA,
                childrenB,
                index,
                len;

            if (!isEqual) {
                return false;
            }

            // compare special attribute - class
            isEqual = IS_CLASS_EQUAL(nodeA, nodeB);
            if (!isEqual) {
                return false;
            }

            // compare special attribute - style
            isEqual = IS_STYLE_EQUAL(nodeA, nodeB);

            if (!isEqual) {
                return false;
            }

            // the child is equal or not
            // only compare the textNode and ElementNode
            childrenA = _.filter(nodeA.childNodes, isTextOrElementNode);
            childrenB = _.filter(nodeB.childNodes, isTextOrElementNode);

            if (childrenA.length !== childrenB.length) {
                return false;
            }
            len = childrenA.length;

            for (index = 0; index < len; index++) {
                if (!isDomEqual(childrenA[index], childrenB[index])) {
                    return false;
                }
            }

            return true;
        };

    /**
     *
     */
    return function (htmlA, htmlB) {

        if (htmlA === htmlB) {
            return true;
        }

        var nodeA = PARSE_HTML(htmlA, true),
            nodeB = PARSE_HTML(htmlB, true),
            isEqual = isDomEqual(nodeA, nodeB);

        return isEqual;
    };
});
