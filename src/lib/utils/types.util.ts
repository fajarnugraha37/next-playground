import { z, SafeParseReturnType } from "zod";
import { PersistOptions } from "zustand/middleware";
import { SerializeOptions } from 'cookie';
import type { cookies } from 'next/headers';
import { IncomingMessage, ServerResponse } from 'http';
import type { RequestCookies, ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies';


export type Optional<T> = T | undefined;

export type TZHelper = <TSchema>(schema: z.ZodType<TSchema>) => {
  validate: (data: unknown) => SafeParseReturnType<TSchema, TSchema>;
  validateAsync: (
    data: unknown
  ) => Promise<SafeParseReturnType<TSchema, TSchema>>;
  fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<[TSchema | null, z.ZodError<TSchema> | unknown | null]>;
  mock: () => TSchema;
  mocks: (length: number) => TSchema[];
};

// Generic Store Creator with optional persistence
export type StoreOptions<T> = {
  persistOptions?: PersistOptions<T>;
};

// HTTP Method Types
export type HttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

// Generic API Response Type
export interface ApiResponse<T> {
  data: T;
  status: number;
}

interface NextCookiesRequest extends Request {
  get cookies(): RequestCookies;
}

interface NextCookiesResponse extends Response {
  get cookies(): ResponseCookies;
}

export interface HttpContext extends SerializeOptions {
  req?: IncomingMessage & {
    // Might be set by third-party libraries such as `cookie-parser`
    cookies?: TmpCookiesObj;
  };
  res?: ServerResponse;
}
export type NextContext = {
  req?: NextCookiesRequest;
  res?: NextCookiesResponse;
  cookies?: CookiesFn;
};
export type OptionsType = HttpContext | NextContext;

export type CookiesFn = typeof cookies;
export type NextCookies = NextCookiesResponse['cookies'] | NextCookiesRequest['cookies'];
export type TmpCookiesObj = { [key: string]: string } | Partial<{ [key: string]: string }>;
export type CookieValueTypes = string | undefined;