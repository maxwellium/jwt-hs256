"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function base64urlEncode(data) {
    return urlEncode(Buffer
        .from(data, 'utf8')
        .toString('base64'));
}
exports.base64urlEncode = base64urlEncode;
function urlEncode(data) {
    return data
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}
exports.urlEncode = urlEncode;
function base64urlDecode(data) {
    return Buffer.from(data
        .padEnd(data.length + data.length % 4, '=')
        .replace(/\-/g, '+')
        .replace(/_/g, '/'), 'base64').toString('utf8');
}
exports.base64urlDecode = base64urlDecode;
//# sourceMappingURL=base64url.js.map