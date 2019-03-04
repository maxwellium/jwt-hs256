export declare const HEADER_HS256: {
    obj: {
        alg: string;
        typ: string;
    };
    str: string;
};
export declare function generateHS256Token(payload: any, secret: string): string;
export declare function signHS256(data: string, secret: string): string;
export declare function verifyHS256Token(
/** it's acceptable to omit the header */
token: string, secret: string): boolean;
export declare function extractHS256Token(
/** it's acceptable to omit the header */
token: string, secret: string): any;
