"use strict"

var Tokenizer = require("./Tokenizer");

var manimani = {
    /**
     * Tokenizes a Japanese sentence into a list of moras with romaji trees.
     * The callback follows the Node.js convention: callback(err, moras).
     * @param {string} dic - Path to the kuromoji dictionary directory.
     * @param {string} sentence - Japanese sentence to tokenize.
     * @param {(err: Error|null, moras?: object[]) => void} callback
     */
    tokenize: function(dic, sentence, callback) {
        var tokenizer = new Tokenizer();
        tokenizer.tokenize(dic, sentence, function(err, moras) {
            callback(err, moras);
        });
    }
};

module.exports = manimani;
