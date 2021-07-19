export const FIXTURES = {
    hs256Token: [{
            i: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.aXzC7q7z1lX_hxk5P0R368xEU7H1xRwnBQQcLAmG0EY`,
            o: { sub: '1234567890', name: 'John Doe' },
            k: 'test'
        }, {
            i: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjAyMjA0MjIsImV4cCI6MTYyMDIyNDAyMiwic3ViIjoibWF4d2VsbGl1bSIsImlzcyI6ImdpdGh1Yi5jb20iLCJub20iOnsiYyI6InRlc3QiLCJnIjpbInVzZXIiXSwiX3YiOjR9fQ.Qb6MyRkU3oS9aXLL4ODIIS4BaGeQyxKqu8QICFwGEc0`,
            o: {
                "iat": 1620220422,
                "exp": 1620224022,
                "sub": "maxwellium",
                "iss": "github.com",
                "nom": {
                    "c": "test",
                    "g": [
                        "user"
                    ],
                    "_v": 4
                }
            },
            k: `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^\`abcdefghijklmnopqrstuvwxyz{|}~`
        }, {
            i: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjAyODc0NTYsImV4cCI6MTYyMDI5MTA1Niwic3ViIjoiNjAyNDE4M2NlYTMzODdiNTYyOTRjNjY5IiwiaXNzIjoiYXV0aC5kZXYubm9tLmxlZ2FsIiwibm9tIjp7ImMiOiI2MDI0MTcwNDgxOTBhNWIxNTAyM2YxMmQiLCJnIjpbInVzZXIiXSwiX3YiOjR9fQ._m8Uz3ESJZtANXQFiuIgsY3pqQ-knTK7Lzz5KWqTDvs`,
            o: {
                "iat": 1620287456,
                "exp": 1620291056,
                "sub": "6024183cea3387b56294c669",
                "iss": "auth.dev.nom.legal",
                "nom": {
                    "c": "602417048190a5b15023f12d",
                    "g": [
                        "user"
                    ],
                    "_v": 4
                }
            },
            k: `vUE/KiM+eFqk3XCbMwY8r;w1.rDK0Q)-
`
        }, {
            i: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjAyMTc0MjIsImV4cCI6MTYyMDMwMzgyMiwic3ViIjoiNjAyNDE4M2NlYTMzODdiNTYyOTRjNjY5IiwiaXNzIjoiYXV0aC5kZXYubm9tLmxlZ2FsIn0.aonMpSlwykNh0hMTOya84F8HDUyQRlDH8rTXddly1VY`,
            o: {
                "iat": 1620217422,
                "exp": 1620303822,
                "sub": "6024183cea3387b56294c669",
                "iss": "auth.dev.nom.legal"
            },
            k: `vUE/KiM+eFqk3XCbMwY8r;w1.rDK0Q)-`
        }],
    base64url: [{
            i: `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^\`abcdefghijklmnopqrstuvwxyz{|}~`,
            o: `ISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0-P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1-`
        }, {
            i: `bytes = (string_length(encoded_string) - 814) / 1.37`,
            o: `Ynl0ZXMgPSAoc3RyaW5nX2xlbmd0aChlbmNvZGVkX3N0cmluZykgLSA4MTQpIC8gMS4zNw`
        }],
    urlEncode: [{
            i: `+/==`,
            o: `-_`
        }]
};
//# sourceMappingURL=fixtures.js.map