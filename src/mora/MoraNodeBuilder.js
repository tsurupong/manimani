"use strict";

const MoraNode = require("./MoraNode");

/**
 * constructor
 */
function MoraNodeBuilder () {

}

/**
 * Builds a tree of Mora nodes from an array of Romanized strings.
 * @param {string[]} romans
 * @returns {MoraNode[]}
 */
MoraNodeBuilder.prototype.build = function (romans) {
    var nodes = [];
    for (const r of romans) {
        const chars = [...r];
        if (chars.length === 1 && ["n", "x", "l"].includes(chars[0])) {
            nodes.push(new MoraNode(0, chars[0]));
            continue;
        }
        let prev;
        for (let idx = 0; idx < chars.length; idx++) {
            const c = chars[idx];
            if (!prev) {
                let root = nodes.find(n => n.val === c);
                if (!root) {
                    root = new MoraNode(0, c);
                    nodes.push(root);
                }
                prev = root;
            } else {
                prev = prev.add(c);
            }
        }
    }
    return nodes;
}

module.exports = MoraNodeBuilder;
