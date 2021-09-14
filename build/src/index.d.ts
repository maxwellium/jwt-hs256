/// <reference types="node" />
export declare const HEADER_HS256 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
export declare function generateHS256Token<T>(payload: T, secret: string): string;
export declare function signHS256(data: string, secret: string): Buffer;
export declare function verifyHS256Token(token: string, secret: string): boolean;
export declare function extractHS256Token<T>(token: string, secret: string): T;
