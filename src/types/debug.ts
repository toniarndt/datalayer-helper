import { DataLayer } from './data-layer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ConsoleFunction = (...args: any[]) => void;

/** @internal */
export type LogEntry = {
  functionName: string;
  message: string | null;
  level: 'log' | 'debug' | 'info' | 'warn' | 'error';
  args?: DataLayer | object | string | string[] | string[][];
};
