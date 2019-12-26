import { strictEqual, deepStrictEqual } from 'assert';

import { base64urlEncode, urlEncode, base64urlDecode } from '../src/base64url';
import { generateHS256Token, extractHS256Token } from '../src/index';


export const FIXTURES = {
  HS256Token: {
    i: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.aXzC7q7z1lX_hxk5P0R368xEU7H1xRwnBQQcLAmG0EY`,
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


export function run() {

  console.log( 'testing generateHS256Token' );
  deepStrictEqual(
    generateHS256Token( FIXTURES.HS256Token.o, FIXTURES.HS256Token.k ),
    FIXTURES.HS256Token.i,
    `✖ ${ FIXTURES.HS256Token.o } did not yield ${ FIXTURES.HS256Token.i }`
  );
  console.log( '✔ passed' );


  console.log( 'testing extractHS256Token' );
  deepStrictEqual(
    extractHS256Token( FIXTURES.HS256Token.i, FIXTURES.HS256Token.k ),
    FIXTURES.HS256Token.o,
    `✖ ${ FIXTURES.HS256Token.i } did not yield ${ FIXTURES.HS256Token.o }`
  );
  console.log( '✔ passed' );


  console.log( 'testing base64urlEncode' );
  strictEqual(
    base64urlEncode( FIXTURES.base64urlEncode.i ),
    FIXTURES.base64urlEncode.o,
    `✖ ${ FIXTURES.base64urlEncode.i } did not yield ${ FIXTURES.base64urlEncode.o }`
  );
  console.log( '✔ passed' );


  console.log( 'testing base64urlDecode' );
  strictEqual(
    base64urlDecode( FIXTURES.base64urlEncode.o ),
    FIXTURES.base64urlEncode.i,
    `✖ ${ FIXTURES.base64urlEncode.o } did not yield ${ FIXTURES.base64urlEncode.i }`
  );
  console.log( '✔ passed' );


  console.log( 'testing urlEncode' );
  strictEqual(
    urlEncode( FIXTURES.urlEncode.i ),
    FIXTURES.urlEncode.o,
    `✖ ${ FIXTURES.urlEncode.i } did not yield ${ FIXTURES.urlEncode.o }`
  );
  console.log( '✔ passed' );

}

run();
