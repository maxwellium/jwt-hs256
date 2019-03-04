import { createHmac } from 'crypto';

import { base64urlEncode, urlEncode, base64urlDecode } from './base64url';

const _HS256 = { alg: 'HS256', typ: 'JWT' };

export const HEADER_HS256 = {
  obj: _HS256,
  str: base64urlEncode( JSON.stringify( _HS256 ) )
};


export function generateHS256Token( payload: any, secret: string ) {
  const data = `${ HEADER_HS256.str }.${ base64urlEncode( JSON.stringify( payload ) ) }`;

  return `${ data }.${ urlEncode( signHS256( data, secret ) ) }`;
}


export function signHS256( data: string, secret: string ) {
  return createHmac( 'sha256', secret )
    .update( data )
    .digest( 'base64' );
}

export function verifyHS256Token(
  /** it's acceptable to omit the header */
  token: string,
  secret: string
) {
  let [ header, payload, signature ] = splitToken( token );

  const verify = urlEncode( signHS256( [ header, payload ].join( '.' ), secret ) );

  return verify === signature;
}

function splitToken( token: string ) {
  let [ header, payload, signature ] = token.split( '.' );

  if ( !signature ) {
    signature = payload;
    payload = header;
    header = HEADER_HS256.str;
  }

  return [ header, payload, signature ];
}


export function extractHS256Token(
  /** it's acceptable to omit the header */
  token: string,
  secret: string
) {
  let [ header, payload, signature ] = splitToken( token );

  const verify = urlEncode( signHS256( [ header, payload ].join( '.' ), secret ) );

  if ( verify !== signature ) {
    throw 'signature mismatch';
  }

  return JSON.parse( base64urlDecode( payload ) );
}
