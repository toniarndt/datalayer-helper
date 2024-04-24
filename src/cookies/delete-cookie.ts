import * as dbg from '../debug';

/**
 * Removes a cookie, if it exists
 *
 * @param name Name of the cookie
 */
export function deleteCookie(name: string): void {
  const date = new Date();
  date.setTime(date.getTime());
  const expires = 'expires=' + date.toUTCString();
  document.cookie = `${name}=;${expires};path=/`;
  dbg.log({
    message: `Cookie '${name}' deleted`,
    functionName: 'deleteCookie',
    level: 'log'
  });
}
