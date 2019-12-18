Small zero-dependencies vanilla module to generate, verify and extract [JWTs](https://tools.ietf.org/html/rfc7519) in their most common HS256 (HMAC with SHA-256) 
variant.

```typescript
console.log( generateHS256Token( {
  sub: '1234567890',
  name: 'John Doe'
}, 'test' ) );
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.aXzC7q7z1lX_hxk5P0R368xEU7H1xRwnBQQcLAmG0EY'

console.log( extractHS256Token(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.aXzC7q7z1lX_hxk5P0R368xEU7H1xRwnBQQcLAmG0EY',
  'test'
) );
// { sub: '1234567890', name: 'John Doe' }
```
(see test/index.ts).
You can test the results on https://jwt.io/ .


---

Copyright (c) 2020 **Max Dancau**

License **MIT**
