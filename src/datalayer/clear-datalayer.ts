import * as dbg from '../debug';

/**
 * Deletes the content of the datalayer object
 */
export function clearDatalayer() {
  for (const prop of Object.getOwnPropertyNames(window._datalayer)) {
    delete window._datalayer[prop];
  }
  dbg.log({
    functionName: 'clearDatalayer',
    message: 'Datalayer object cleared',
    level: 'log'
  });
}
