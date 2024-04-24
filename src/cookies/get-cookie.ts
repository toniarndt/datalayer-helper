import * as dbg from '../debug';
import { getCookies } from './get-cookies';

/**
 * Returns the value of the cookie or null if the cookie does not exist
 *
 * @param name The name of the cookie
 * @return The value of the cookie or null
 */
export function getCookie(name: string): string | null {
  const cookieObj: Record<string, string> = getCookies();
  if (cookieObj != null && name in cookieObj) {
    dbg.log({
      message: `'${name}' = '${cookieObj[name]}'`,
      functionName: 'getCookie',
      level: 'log'
    });

    return cookieObj[name] as string;
  } else {
    dbg.log({
      message: `Cookie '${name}' not found`,
      functionName: 'getCookie',
      level: 'warn'
    });

    return null;
  }
}
