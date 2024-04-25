import { DataLayer } from '../types';
import * as dbg from '../debug';

/**
 * Enables to set an own custom datalayer object
 * If null is passed as a parameter, the default global datalayer will be reset and used
 *
 * @param datalayer The (custom) datalayer object
 */
export function useDatalayer(datalayer?: object | null): void {
  if (datalayer == null) {
    window._datalayer = {} as DataLayer;
    dbg.log({
      functionName: 'useDatalayer',
      message: 'Standard global datalayer object has been reset and is now used',
      level: 'log'
    });
  } else {
    if (typeof datalayer === 'object') {
      window._datalayer = datalayer as DataLayer;
      dbg.log({
        functionName: 'useDatalayer',
        message: 'Custom global datalayer object is now used',
        level: 'log'
      });
    } else {
      dbg.log({
        functionName: 'useDatalayer',
        message: 'Custom datalayer object cannot be used because no object was transferred',
        level: 'error'
      });
    }
  }
}
