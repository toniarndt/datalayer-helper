import * as dbg from './';

/* @internal */
export let debugOn: boolean = false;

/**
 * Allows to change the debug mode
 *
 * @param debug Specifies whether debug mode should be activated or deactivated
 */
export function setDebug(debug: boolean): void {
  // Do not execute this function if the values match
  if (debugOn == debug) return;

  debugOn = debug;

  if (debugOn == true) {
    dbg.log({
      message: 'The debug mode has been activated',
      functionName: 'setDebug',
      level: 'log'
    });
  } else {
    dbg.log({
      message: 'The debug mode has been deactivated',
      functionName: 'setDebug',
      level: 'log'
    });
  }
}
