"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const base64url_1 = require("../src/base64url");
const src_1 = require("../src");
exports.FIXTURES = {
    HS256Token: {
        i: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.aXzC7q7z1lX_hxk5P0R368xEU7H1xRwnBQQcLAmG0EY`,
        o: { sub: '1234567890', name: 'John Doe' },
        k: 'test'
    },
    HS256TokenShort: {
        i: `eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.aXzC7q7z1lX_hxk5P0R368xEU7H1xRwnBQQcLAmG0EY`,
        o: { sub: '1234567890', name: 'John Doe' },
        k: 'test'
    },
    base64urlEncode: {
        i: `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^\`abcdefghijklmnopqrstuvwxyz{|}~`,
        o: `ISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0-P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1-`
    },
    urlEncode: {
        i: `+/==`,
        o: `-_`
    }
};
function run() {
    console.log('testing generateHS256Token');
    assert_1.deepStrictEqual(src_1.generateHS256Token(exports.FIXTURES.HS256Token.o, exports.FIXTURES.HS256Token.k), exports.FIXTURES.HS256Token.i, `✖ ${exports.FIXTURES.HS256Token.o} did not yield ${exports.FIXTURES.HS256Token.i}`);
    console.log('✔ passed');
    console.log('testing extractHS256Token');
    assert_1.deepStrictEqual(src_1.extractHS256Token(exports.FIXTURES.HS256Token.i, exports.FIXTURES.HS256Token.k), exports.FIXTURES.HS256Token.o, `✖ ${exports.FIXTURES.HS256Token.i} did not yield ${exports.FIXTURES.HS256Token.o}`);
    console.log('✔ passed');
    console.log('testing extractHS256Token');
    assert_1.deepStrictEqual(src_1.extractHS256Token(exports.FIXTURES.HS256TokenShort.i, exports.FIXTURES.HS256TokenShort.k), exports.FIXTURES.HS256TokenShort.o, `✖ ${exports.FIXTURES.HS256TokenShort.i} did not yield ${exports.FIXTURES.HS256TokenShort.o}`);
    console.log('✔ passed');
    console.log('testing base64urlEncode');
    assert_1.strictEqual(base64url_1.base64urlEncode(exports.FIXTURES.base64urlEncode.i), exports.FIXTURES.base64urlEncode.o, `✖ ${exports.FIXTURES.base64urlEncode.i} did not yield ${exports.FIXTURES.base64urlEncode.o}`);
    console.log('✔ passed');
    console.log('testing base64urlDecode');
    assert_1.strictEqual(base64url_1.base64urlDecode(exports.FIXTURES.base64urlEncode.o), exports.FIXTURES.base64urlEncode.i, `✖ ${exports.FIXTURES.base64urlEncode.o} did not yield ${exports.FIXTURES.base64urlEncode.i}`);
    console.log('✔ passed');
    console.log('testing urlEncode');
    assert_1.strictEqual(base64url_1.urlEncode(exports.FIXTURES.urlEncode.i), exports.FIXTURES.urlEncode.o, `✖ ${exports.FIXTURES.urlEncode.i} did not yield ${exports.FIXTURES.urlEncode.o}`);
    console.log('✔ passed');
}
exports.run = run;
//# sourceMappingURL=index.js.map