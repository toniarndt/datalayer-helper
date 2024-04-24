import { ConsoleFunction, LogEntry } from '../types';
import { debugOn } from './set-debug';

const _PREFIX = '\u{26A1} datalayer-helper';

/**
 * Writes the message to the console if debug mode is activated
 *
 * @param log The LogEntry to write to the console
 */
export function log(log: LogEntry): void {
  if (debugOn == true) {
    const orgMethod: ConsoleFunction = console[log.level as keyof Console] as ConsoleFunction;

    let message: string = `${_PREFIX} @${log.functionName}`;
    if (log.message != null) message += `: ${log.message}`;

    orgMethod.apply(console, log.args == null ? [message] : [message, log.args]);
  }
}
