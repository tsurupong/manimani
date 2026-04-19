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
 * The callback follows the Node.js convention: callback(err, tokens).
 * @param {string} dic
 * @param {string} sentence
 * @param {(err: Error|null, tokens?: object[]) => void} callback
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
        try {
            const tokens = tokenizer.tokenize(sentence);
            callback(null, tokens);
        } catch (err) {
            callback(err);
        }
    }).catch(err => {
        callback(err);
    });
}

/**
 * Clears the cached kuromoji tokenizers. Primarily intended for tests.
 */
Kuromoji.clearCache = function() {
    tokenizerCache.clear();
}

module.exports = Kuromoji;
