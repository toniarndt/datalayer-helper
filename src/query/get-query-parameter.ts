import * as dbg from '../debug';

/**
 * Returns the query parameters of the current page or any URL as a string (first value),
 * string array (all values) or null if no values were found for the key
 *
 * @param key Query key for which the values are to be returned
 * @param type By default, returns a string with the first value found, with the Array option all values will be returned
 * @param url Any URL or, by default, the current URL of the website
 * @returns Returns values as string, string array or zero if no matching values were found for the key
 */
export function getQueryParameter(
  key: string,
  type: 'string' | 'array' = 'string',
  url: string = document.URL
): string[] | string | null {
  if (type != 'string' && type != 'array') {
    dbg.log({
      message: `Invalid type "${type}" was passed (string | array)`,
      functionName: 'getQueryParameter',
      level: 'error'
    });

    return null;
  }

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
      level: 'warn'
    });
    return null;
  }

  switch (type) {
    case 'string':
      dbg.log({
        message: `"${key}" (first-value)`,
        functionName: 'getQueryParameter',
        level: 'log',
        args: arr[0]
      });

      return arr[0];

    case 'array':
      dbg.log({
        message: `"${key}" (all-values)`,
        functionName: 'getQueryParameter',
        level: 'log',
        args: arr
      });

      return arr;

    default:
      return null;
  }
}
