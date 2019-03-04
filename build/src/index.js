"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const base64url_1 = require("./base64url");
const _HS256 = { alg: 'HS256', typ: 'JWT' };
exports.HEADER_HS256 = {
    obj: _HS256,
    str: base64url_1.base64urlEncode(JSON.stringify(_HS256))
};
function generateHS256Token(payload, secret) {
    const data = `${exports.HEADER_HS256.str}.${base64url_1.base64urlEncode(JSON.stringify(payload))}`;
    return `${data}.${base64url_1.urlEncode(signHS256(data, secret))}`;
}
exports.generateHS256Token = generateHS256Token;
function signHS256(data, secret) {
    return crypto_1.createHmac('sha256', secret)
        .update(data)
        .digest('base64');
}
exports.signHS256 = signHS256;
function verifyHS256Token(
/** it's acceptable to omit the header */
token, secret) {
    let [header, payload, signature] = splitToken(token);
    const verify = base64url_1.urlEncode(signHS256([header, payload].join('.'), secret));
    return verify === signature;
}
exports.verifyHS256Token = verifyHS256Token;
function splitToken(token) {
    let [header, payload, signature] = token.split('.');
    if (!signature) {
        signature = payload;
        payload = header;
        header = exports.HEADER_HS256.str;
    }
    return [header, payload, signature];
}
function extractHS256Token(
/** it's acceptable to omit the header */
token, secret) {
    let [header, payload, signature] = splitToken(token);
    const verify = base64url_1.urlEncode(signHS256([header, payload].join('.'), secret));
    if (verify !== signature) {
        throw 'signature mismatch';
    }
    return JSON.parse(base64url_1.base64urlDecode(payload));
}
exports.extractHS256Token = extractHS256Token;
//# sourceMappingURL=index.js.map