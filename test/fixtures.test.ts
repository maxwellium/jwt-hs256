const RESET = '\x1b[0m';
export const _red = (text: string) => ['\x1b[31m', text, RESET].join('');
export const _green = (text: string) => ['\x1b[32m', text, RESET].join('');
export const _bright = (text: string) => ['\x1b[1m', text, RESET].join('');

export interface Fixture { jwt: string; payload: Record<string, unknown>; key: string; };

export const FIXTURES: Fixture[] = [{
  jwt: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.B3J4kehL3tNOmxcR2GcktantMbMKzG3461jxdJzpm1M`,
  payload: {
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
  },
  key: `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^\`abcdefghijklmnopqrstuvwxyz{|}~`
}, {
  jwt: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Im1heHdlbGxpdW0iLCJpYXQiOjE1MTYyMzkwMjJ9.6dbESNblvdpZt1a777BglNbAQvg6QM6ZAaLvg_LhAdk`,
  payload: {
    "sub": "1234567890",
    "name": "maxwellium",
    "iat": 1516239022
  },
  key: 'your-256-bit-secret'
}];

export const FIXTURES_REJECT: Fixture[] = [{
  jwt: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Im1heHdlbGxpdW0iLCJpYXQiOjE1MTYyMzkwMjJ9.6dbESNblvdpZt1a777BglNbAQvg6QM6ZAaLvg_LhAdk`,
  payload: {
    message: 'HS256 signature mismatch'
  },
  key: `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^\`abcdefghijklmnopqrstuvwxyz{|}~`
}, {
  jwt: `eyJhbGciOiJIQVMyNTYiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Im1heHdlbGxpdW0iLCJpYXQiOjE1MTYyMzkwMjJ9.6dbESNblvdpZt1a777BglNbAQvg6QM6ZAaLvg_LhAdk`,
  payload: {
    message: 'jose header algorithm is not HS256'
  },
  key: `your-256-bit-secret`
}, {
  jwt: `eyJhbGciOiJIQVMyNTYiLCJ0iOiJKV1QifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Im1heHdlbGxpdW0iLCJpYXQiOjE1MTYyMzkwMjJ9.6dbESNblvdpZt1a777BglNbAQvg6QM6ZAaLvg_LhAdk`,
  payload: {
    message: 'jose header corrupted'
  },
  key: `your-256-bit-secret`
}];
