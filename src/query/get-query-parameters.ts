import * as dbg from '../debug';

/**
 * Returns the query parameters of the current page or any URL as a
 * multidimensional string array so that duplicate parameters are not dropped
 *
 * @param url Any URL or, by default, the current URL of the website
 * @returns Query parameters as multidimensional string array
 */
export function getQueryParameters(url: string = document.URL): string[][] {
  const arr: string[][] = [];

  if (url.indexOf('?') != -1) {
    const queryString: string[] = url.split('?');

    if (queryString.length >= 1) {
      const parts: string[] = queryString[1].split('&');

      for (let i = 0; i < parts.length; i++) {
        const [key, value] = parts[i].split('=');
        const _key: string = decodeURIComponent(key);
        const _value: string = typeof value == 'undefined' ? '' : decodeURIComponent(value);

        arr.push([_key, _value]);
      }
    }
  }

  if (arr.length == 0) {
    dbg.log({
      message: 'No query parameters passed',
      functionName: 'getQueryParameters',
      level: 'warn'
    });
  } else {
    dbg.log({
      message: null,
      functionName: 'getQueryParameters',
      level: 'log',
      args: arr
    });
  }

  return arr;
}
