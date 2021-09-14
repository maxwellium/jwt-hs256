import { deepStrictEqual } from 'assert';
import { extractHS256Token, generateHS256Token } from '../src/index';
import { FIXTURES } from './fixtures';

const RESET = '\x1b[0m',
  _red = (text: string) => [ '\x1b[31m', text, RESET ].join(''),
  _green = (text: string) => [ '\x1b[32m', text, RESET ].join(''),
  _bright = (text: string) => [ '\x1b[1m', text, RESET ].join('');


function main() {

  console.log(_bright('testing generateHS256Token'));
  for (let i = 0; i < FIXTURES.length; i++) {
    const fixture = FIXTURES[ i ];
    const actual = generateHS256Token(fixture.o, fixture.k);
    deepStrictEqual(
      actual,
      fixture.i,
      _red(` ✖ ${ JSON.stringify(fixture.o) } did not yield ${ fixture.i } but ${ actual }`)
    );
    console.log(_green(` ✔ passed fixture ${ i }`));
  }


  console.log(_bright('testing extractHS256Token'));
  for (let i = 0; i < FIXTURES.length; i++) {
    const fixture = FIXTURES[ i ];
    try {
      const actual = extractHS256Token(fixture.i, fixture.k);
      deepStrictEqual(
        actual,
        fixture.o,
        `${ _red(` ✖ failed fixture ${ i }`) }\n${ fixture.i } did not yield ${ fixture.o } but ${ actual }`
      );
      console.log(_green(` ✔ passed fixture ${ i }`));
    } catch (e) {
      console.log(_red(` ✖ failed fixture ${ i }`), `\n threw before yielding`);
    }
  }

}

main();