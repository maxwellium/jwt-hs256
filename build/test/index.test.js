import { deepStrictEqual, equal } from 'node:assert/strict';
import { extractHS256Token, generateHS256Token } from '../src/index.js';
import { FIXTURES, FIXTURES_REJECT, _bright, _green, _red } from './fixtures.test.js';
let hasErrored = false;
console.log(_bright('testing generateHS256Token'));
for (let i = 0; i < FIXTURES.length; i++) {
    const fixture = FIXTURES[i];
    const actual = generateHS256Token(fixture.payload, fixture.key);
    try {
        equal(actual, fixture.jwt);
        console.log(_green(` ✔ passed fixture ${i}`));
    }
    catch (e) {
        console.error(_red(` ✖ failed fixture ${i}\ndid not yield ${fixture.jwt} but ${actual}`));
        hasErrored = true;
    }
}
console.log(_bright('testing extractHS256Token'));
for (let i = 0; i < FIXTURES.length; i++) {
    const fixture = FIXTURES[i];
    const actual = extractHS256Token(fixture.jwt, fixture.key);
    try {
        deepStrictEqual(actual, fixture.payload);
        console.log(_green(` ✔ passed fixture ${i}`));
    }
    catch (e) {
        console.log(_red(` ✖ failed fixture ${i}\ndid not yield ${JSON.stringify(fixture.payload)} but ${JSON.stringify(actual)}`));
        hasErrored = true;
    }
}
console.log(_bright('testing extractHS256Token rejection'));
for (let i = 0; i < FIXTURES_REJECT.length; i++) {
    const fixture = FIXTURES_REJECT[i];
    try {
        extractHS256Token(fixture.jwt, fixture.key);
        console.log(_red(` ✖ failed to reject fixture ${i}`));
        hasErrored = true;
    }
    catch (e) {
        if (!(e instanceof Error) || e.message !== fixture.payload.message) {
            console.log(_red(` ✖ fixture ${i} rejected for wrong reason`), e);
            hasErrored = true;
        }
        else {
            console.log(_green(` ✔ sucessfully rejected fixture ${i}`));
        }
    }
}
process.exit(Number(hasErrored));
