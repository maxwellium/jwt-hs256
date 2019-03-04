import { generateHS256Token, extractHS256Token } from '../src';

console.log( generateHS256Token( {
  "sub": "1234567890",
  "name": "John Doe",
}, 'test' ) );

console.log( 'with header', extractHS256Token(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.aXzC7q7z1lX_hxk5P0R368xEU7H1xRwnBQQcLAmG0EY',
  'test'
) );
console.log( 'without header', extractHS256Token(
  'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.aXzC7q7z1lX_hxk5P0R368xEU7H1xRwnBQQcLAmG0EY',
  'test' )
);