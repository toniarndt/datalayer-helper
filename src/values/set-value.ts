import { DataLayer } from '../types';
import * as dbg from '../debug';

/**
 * Creates the required namespace in a data layer object
 * and overwrites it if it already exists
 *
 * @param namespace Namespace of the variable (can be separated with a dot)
 * @param value Value of the variable
 */
export function setValue(namespace: string, value: string): void {
  let layer: DataLayer = window._datalayer as DataLayer;
  const parts: string[] = namespace.split('.');

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (i < parts.length - 1) {
      layer[part] = {};
      layer = layer[part] as DataLayer;
    } else {
      layer[part] = value;
      dbg.log({
        message: `'${namespace}' = '${value}'`,
        functionName: 'setValue',
        level: 'log'
      });
    }
  }
}
