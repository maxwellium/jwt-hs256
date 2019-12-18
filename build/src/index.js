"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const base64url_1 = require("./base64url");
exports.HEADER_HS256 = base64url_1.base64urlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
function generateHS256Token(payload, secret) {
    const data = `${exports.HEADER_HS256}.${base64url_1.base64urlEncode(JSON.stringify(payload))}`;
    return `${data}.${base64url_1.urlEncode(signHS256(data, secret))}`;
}
exports.generateHS256Token = generateHS256Token;
function signHS256(data, secret) {
    return crypto_1.createHmac('sha256', secret)
        .update(data)
        .digest('base64');
}
exports.signHS256 = signHS256;
function verifyHS256Token(token, secret) {
    const [header, payload, signature] = token.split('.');
    const verify = base64url_1.urlEncode(signHS256([header, payload].join('.'), secret));
    return verify === signature;
}
exports.verifyHS256Token = verifyHS256Token;
function extractHS256Token(token, secret) {
    const [header, payload, signature] = token.split('.');
    const verify = base64url_1.urlEncode(signHS256([header, payload].join('.'), secret));
    if (verify !== signature) {
        throw new Error('signature mismatch');
    }
    return JSON.parse(base64url_1.base64urlDecode(payload));
}
exports.extractHS256Token = extractHS256Token;
//# sourceMappingURL=index.js.map