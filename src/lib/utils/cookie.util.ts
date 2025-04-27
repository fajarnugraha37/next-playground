import * as clientCookies from "./cookie-client.util";
import * as serverCookies from "./cookie-server.util";
import type { OptionsType } from "./types.util";
import { isClientSide } from "./common.util";

export const getCookies = (options?: OptionsType) =>
  isClientSide(options)
    ? clientCookies.getCookies(options)
    : serverCookies.getCookies(options);

export const getCookie = (key: string, options?: OptionsType) =>
  isClientSide(options)
    ? clientCookies.getCookie(key, options)
    : serverCookies.getCookie(key, options);

export const setCookie = (key: string, data: any, options?: OptionsType) =>
  isClientSide(options)
    ? clientCookies.setCookie(key, data, options)
    : serverCookies.setCookie(key, data, options);

export const deleteCookie = (key: string, options?: OptionsType) =>
  isClientSide(options)
    ? clientCookies.deleteCookie(key, options)
    : serverCookies.deleteCookie(key, options);

export const hasCookie = (key: string, options?: OptionsType) =>
  isClientSide(options)
    ? clientCookies.hasCookie(key, options)
    : serverCookies.hasCookie(key, options);

export {
  useGetCookies,
  useHasCookie,
  useSetCookie,
  useGetCookie,
  useDeleteCookie,
  useCookiesNext,
} from "./cookie-client.util";
