import { deepStrictEqual, strictEqual } from 'assert';
import { base64urlDecode, base64urlEncode, urlEncode } from '../src/base64url';
import { extractHS256Token, generateHS256Token } from '../src/index';
import { FIXTURES } from './fixtures';
export async function main() {
    console.log('testing generateHS256Token');
    for (const fixture of FIXTURES.hs256Token) {
        deepStrictEqual(generateHS256Token(fixture.o, fixture.k), fixture.i, `✖ ${JSON.stringify(fixture.o)} did not yield ${fixture.i}`);
    }
    console.log('✔ passed');
    console.log('testing extractHS256Token');
    for (const fixture of FIXTURES.hs256Token) {
        deepStrictEqual(extractHS256Token(fixture.i, fixture.k), fixture.o, `✖ ${fixture.i} did not yield ${fixture.o}`);
    }
    console.log('✔ passed');
    console.log('testing base64urlEncode');
    for (const fixture of FIXTURES.base64url) {
        strictEqual(base64urlEncode(fixture.i), fixture.o, `✖ ${fixture.i} did not yield ${fixture.o}`);
    }
    console.log('✔ passed');
    console.log('testing base64urlDecode');
    for (const fixture of FIXTURES.base64url) {
        strictEqual(base64urlDecode(fixture.o), fixture.i, `✖ ${fixture.o} did not yield ${fixture.i}`);
    }
    console.log('✔ passed');
    console.log('testing urlEncode');
    for (const fixture of FIXTURES.urlEncode) {
        strictEqual(urlEncode(fixture.i), fixture.o, `✖ ${fixture.i} did not yield ${fixture.o}`);
    }
    console.log('✔ passed');
}
if (import.meta.url === `file://${process.argv[1]}`) {
    main();
}
//# sourceMappingURL=test.js.map