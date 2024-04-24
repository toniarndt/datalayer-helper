import * as dbg from '../debug';

/**
 * Return an object of cookies as a key value pair
 *
 * @return Data as key value pair or null
 */
export function getCookies(): Record<string, string> {
  const cookieObj: Record<string, string> = Object.assign(
    {},
    ...decodeURI(document.cookie)
      .split(';')
      .map((cookie) => {
        const [key, value] = cookie!.split('=');
        if (key.trimStart() == '') return null;
        return { [key.trimStart()]: value };
      })
  );

  if (Object.keys(cookieObj).length == 0) {
    dbg.log({
      message: 'No cookies are set',
      functionName: 'getCookies',
      level: 'log'
    });
  } else {
    dbg.log({
      message: null,
      functionName: 'getCookies',
      level: 'log',
      args: cookieObj
    });
  }

  return cookieObj;
}
