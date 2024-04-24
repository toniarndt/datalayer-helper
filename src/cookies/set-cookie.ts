import * as dbg from '../debug';

/**
 * Sets a cookie or overwrites it if it already
 * exists with the specified name and value.
 * (by default, the lifetime is set to 30 minutes)
 *
 * @param name The name of the cookie
 * @param value The value of the cookie
 * @param seconds Duration in seconds the cookie should be stored
 * @param path The path of the cookie
 */
export function setCookie(name: string, value: string, seconds: number = 1800, path: string = '/'): void {
  const date = new Date();
  date.setTime(date.getTime() + seconds * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = `${name}=${value};${expires};path=${path}`;
  dbg.log({
    message: `Cookie: '${name}' = '${value}' | Expires: ${seconds}s | Path: ${path}`,
    functionName: 'setCookie',
    level: 'log'
  });
}
