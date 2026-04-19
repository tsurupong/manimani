"use strict";

var path = require("path");
var Tokenizer = require("../src/Tokenizer");

var DIC_PATH = path.join(__dirname, "..", "src", "dict");

describe("Tokenizer Test", () => {
    test("single kanji word", (done) => {
        var tokenizer = new Tokenizer();
        tokenizer.tokenize(DIC_PATH, "柿", (err, data) => {
            try {
                expect(err).toBeNull();
                expect(Array.isArray(data)).toBe(true);
                expect(data.length).toBeGreaterThan(0);
                expect(data[0]).toEqual(expect.objectContaining({
                    from: expect.any(String),
                    pos: expect.any(Number),
                    node: expect.any(Array),
                }));
                done();
            } catch (e) {
                done(e);
            }
        });
    }, 30000);

    test("propagates kuromoji errors via callback", (done) => {
        var tokenizer = new Tokenizer();
        tokenizer.tokenize("/nonexistent/path", "柿", (err, data) => {
            try {
                expect(err).toBeTruthy();
                expect(data).toBeUndefined();
                done();
            } catch (e) {
                done(e);
            }
        });
    }, 30000);
});
