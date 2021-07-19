import { createHmac } from 'crypto';
import { base64urlEncode, urlEncode, base64urlDecode } from './base64url';
export function generateHS256Token(payload, secret) {
    const HEADER_HS256 = base64urlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const data = `${HEADER_HS256}.${base64urlEncode(JSON.stringify(payload))}`;
    return `${data}.${urlEncode(signHS256(data, secret))}`;
}
export function signHS256(data, secret) {
    return createHmac('sha256', secret, { encoding: 'utf-8' })
        .update(Buffer.from(data, 'utf-8'))
        .digest('base64');
}
export function verifyHS256Token(token, secret) {
    const [header, payload, signature] = token.split('.');
    const verify = urlEncode(signHS256([header, payload].join('.'), secret));
    return verify === signature;
}
export function extractHS256Token(token, secret) {
    const [header, payload, signature] = token.split('.');
    const verify = urlEncode(signHS256([header, payload].join('.'), secret));
    if (verify !== signature) {
        throw new Error('signature mismatch');
    }
    return JSON.parse(base64urlDecode(payload));
}
//# sourceMappingURL=index.js.map