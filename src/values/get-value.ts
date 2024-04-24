import { DataLayer } from '../types';
import * as dbg from '../debug';

/**
 * Returns the value of a variable in the datalayer
 *
 * @param namespace Namespace of the variable (can be separated with a dot)
 * @returns Value of a variable or null if it does not exist
 */
export function getValue(namespace: string): string | null {
  let layer: DataLayer = window._datalayer as DataLayer;
  const parts: string[] = namespace.split('.');

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    // Return null if the namespace does not exist
    if (Object.hasOwn(layer, part) == false) break;

    if (typeof layer[part] == 'object') {
      layer = layer[part] as DataLayer;
    } else {
      dbg.log({
        message: `'${namespace}' = '${layer[part] as string}'`,
        functionName: 'getValue',
        level: 'log'
      });
      return layer[part] as string;
    }
  }
  dbg.log({
    message: `Namespace '${namespace}' is undefined`,
    functionName: 'getValue',
    level: 'warn'
  });
  return null;
}
