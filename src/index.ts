import { createHmac } from 'node:crypto';

export const HEADER_HS256_DEFAULT = { alg: 'HS256', typ: 'JWT' };

export const b64urlToJson = <T = Record<string, unknown>>(b64url: string) => JSON.parse(
  Buffer.from(b64url, 'base64url').toString('utf8')
) as T;

export const jsonToB64url = <T = Record<string | number | symbol, unknown>>(payload: T) => Buffer
  .from(JSON.stringify(payload), 'utf-8')
  .toString('base64url');


export function generateHS256Token<T = Record<string, unknown>>(
  payload: T,
  secret: string,
  header: Record<string | number | symbol, unknown> = HEADER_HS256_DEFAULT
) {
  const data = `${jsonToB64url(header)}.${jsonToB64url(payload)}`;
  return `${data}.${signHS256(data, secret)}`;
}


export function signHS256(data: string, secret: string) {
  return createHmac('sha256', secret, { encoding: 'utf-8' })
    .update(Buffer.from(data, 'utf-8'))
    .digest()
    .toString('base64url');
}

/** will throw if header corrupt or signature mismatch */
export function assertHS256TokenSignature(token: string, secret: string) {
  const [headerB64Url, payloadB64Url, signatureB64Url] = token.split('.');

  let header: Record<string, unknown>;
  try {
    header = b64urlToJson(headerB64Url);
  } catch (e) {
    throw new Error('jose header corrupted');
  }
  if ('object' !== typeof header || null === header) {
    throw new Error('jose header corrupted');
  }
  if ('HS256' !== header.alg) {
    throw new Error('jose header algorithm is not HS256');
  }
  if (signHS256([headerB64Url, payloadB64Url].join('.'), secret) !== signatureB64Url) {
    throw new Error('HS256 signature mismatch');
  }
  return void 0;
}


export function extractHS256Token<T = Record<string | number | symbol, unknown>>(
  token: string,
  secret: string
) {
  assertHS256TokenSignature(token, secret);
  const [, payloadB64Url] = token.split('.');
  return b64urlToJson<T>(payloadB64Url);
}
