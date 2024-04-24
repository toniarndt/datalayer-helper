import * as dbg from '../debug';

/**
 * Returns the datalayer as an object
 *
 * @returns The datalayer object
 */
export function getDatalayer(): object {
  dbg.log({
    functionName: 'getDatalayer',
    message: 'Returns the datalayer as an object',
    level: 'log'
  });
  return window._datalayer as object;
}
