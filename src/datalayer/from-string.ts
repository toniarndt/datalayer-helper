import * as dbg from '../debug';

/**
 * Creates the datalayer from a JSON string
 *
 * @param str JSON string for the datalayer
 */
export function fromString(str: string) {
  try {
    window._datalayer = JSON.parse(str);
    dbg.log({
      functionName: 'fromString',
      message: 'Datalayer created from string',
      level: 'log'
    });
  } catch (error) {
    dbg.log({
      functionName: 'fromString',
      message: 'Datalayer object could not be created from the string',
      level: 'error'
    });
  }
}
