import * as dbg from '../debug';
import * as common from '../common';

/**
 * Flattens the datalayer object and returns it
 *
 * @param datalayer Datalayer object which should be flattened
 * @returns The flattened object
 */
export function flattenDatalayer(datalayer: object): object {
  const cloned = common.flatten(datalayer as Record<string, unknown>);
  dbg.log({
    functionName: 'flattenDatalayer',
    message: 'Flattened datalayer object was returned',
    level: 'log'
  });
  return cloned;
}
