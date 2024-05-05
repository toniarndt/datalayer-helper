import * as dbg from '../debug';

/**
 * Returns the query parameters of the current page or any URL as a string array
 * or as an empty array if no values were found for the key
 *
 * @param key Query key for which the values are to be returned
 * @param url Any URL or, by default, the current URL of the website
 * @returns Returns values as a string array or an empty array if no matching values were found for the key
 */
export function getQueryParameter(key: string, url: string = document.URL): string[] {
  const arr: string[] = [];

  if (url.indexOf('?') != -1) {
    const queryString: string[] = url.split('?');

    if (queryString.length >= 1) {
      const parts: string[] = queryString[1].split('&');

      for (let i = 0; i < parts.length; i++) {
        const [tmp_key, tmp_value] = parts[i].split('=');
        const _key: string = decodeURIComponent(tmp_key);
        if (key != _key) continue;
        const _value: string = typeof tmp_value == 'undefined' ? '' : decodeURIComponent(tmp_value);
        arr.push(_value);
      }
    }
  }

  if (arr.length == 0) {
    dbg.log({
      message: `No query parameters passed for the key "${key}"`,
      functionName: 'getQueryParameter',
      level: 'warn',
      args: arr
    });
    return [];
  }

  dbg.log({
    message: `Key: "${key}"`,
    functionName: 'getQueryParameter',
    level: 'log',
    args: arr
  });

  return arr;
}
