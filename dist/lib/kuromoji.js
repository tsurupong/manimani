"use strict";

const kuromoji = require("kuromoji");

const tokenizerCache = new Map();

/**
 * constructor
 */
function Kuromoji() {

}

/**
 * Tokenizes a given Japanese sentence into tokens.
 * @param {string} dic
 * @param {string} sentence
 * @returns {string} tokenized
 */
Kuromoji.prototype.tokenize = function(dic, sentence, callback) {
    if (!tokenizerCache.has(dic)) {
        tokenizerCache.set(dic, new Promise((resolve, reject) => {
            kuromoji.builder({ dicPath: dic }).build((err, tokenizer) => {
                if (err) {
                    tokenizerCache.delete(dic);
                    reject(err);
                } else {
                    resolve(tokenizer);
                }
            });
        }));
    }
    tokenizerCache.get(dic).then(tokenizer => {
        const tokens = tokenizer.tokenize(sentence);
        callback(tokens);
    }).catch(err => {
        console.error(err);
    });
}

module.exports = Kuromoji;