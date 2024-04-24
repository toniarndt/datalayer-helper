import * as dbg from '../debug';
import * as common from '../common';

/**
 * Clones the datalayer object and returns it
 *
 * @param datalayer Datalayer object which should be cloned
 * @returns The cloned object
 */
export function cloneDatalayer(datalayer: object): object {
  const cloned = common.clone<object>(datalayer);
  dbg.log({
    functionName: 'cloneDatalayer',
    message: 'Cloned datalayer object was returned',
    level: 'log'
  });
  return cloned;
}
