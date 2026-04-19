"use strict";

/**
 * constructor
 * @param {number} pos
 * @param {string} val
 * @param {MoraNode[]} children
 */
function MoraNode(pos, val, children) {
    this.pos = pos;
    this.val = val;
    this.children = children ?? [];
}

/**
 * Adds a child node with the given value if it does not already exist,
 * and returns the (existing or newly created) child node.
 * @param {string} val
 * @returns {MoraNode}
 */
MoraNode.prototype.add = function(val) {
    var existing = this.children.find(n => n.val === val);
    if (existing) return existing;
    var node = new MoraNode(this.pos + 1, val);
    this.children.push(node);
    return node;
}

module.exports = MoraNode;
