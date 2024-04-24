import * as dbg from '../debug';

/**
 * Returns the datalayer as a string
 *
 * @returns The datalayer string
 */
export function toString(): string {
  dbg.log({
    functionName: 'toString',
    message: 'Returns the datalayer as a string',
    level: 'log'
  });
  return JSON.stringify(window._datalayer);
}
