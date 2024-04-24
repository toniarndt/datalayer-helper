export * from './config';
export { encodeBase64, decodeBase64 } from './common';
export { setDebug, log } from './debug';
export * from './values';
export * from './cookies';
export * from './query';
export * from './datalayer';

/** Initialize the global data layer object */
if (!window._datalayer) {
  window._datalayer = {};
}
