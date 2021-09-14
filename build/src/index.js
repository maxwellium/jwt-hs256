import { createHmac } from 'crypto';
export const HEADER_HS256 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
export function generateHS256Token(payload, secret) {
    const payloadB64url = Buffer
        .from(JSON.stringify(payload), 'utf-8')
        .toString('base64url');
    const data = `${HEADER_HS256}.${payloadB64url}`;
    return `${data}.${signHS256(data, secret).toString('base64url')}`;
}
export function signHS256(data, secret) {
    return createHmac('sha256', secret, { encoding: 'utf-8' })
        .update(Buffer.from(data, 'utf-8'))
        .digest();
}
export function verifyHS256Token(token, secret) {
    const [header, payload, signature] = token.split('.');
    if (HEADER_HS256 !== header) {
        return false;
    }
    const verify = signHS256([header, payload].join('.'), secret).toString('base64url');
    return verify === signature;
}
export function extractHS256Token(token, secret) {
    const verify = verifyHS256Token(token, secret);
    if (!verify) {
        throw new Error('signature mismatch');
    }
    const [, payloadB64Url] = token.split('.');
    const payload = Buffer.from(payloadB64Url, 'base64url').toString('utf8');
    return JSON.parse(payload);
}
//# sourceMappingURL=index.js.map