export function base64urlEncode( data: string ) {
  return urlEncode( Buffer
    .from( data, 'utf8' )
    .toString( 'base64' ) );
}

export function urlEncode( data: string ) {
  return data
    .replace( /=/g, '' )
    .replace( /\+/g, '-' )
    .replace( /\//g, '_' );
}

export function base64urlDecode( data: string ) {
  return Buffer.from(
    data
      .padEnd( data.length + data.length % 4, '=' )
      .replace( /\-/g, '+' )
      .replace( /_/g, '/' ),
    'base64'
  ).toString( 'utf8' );
}
