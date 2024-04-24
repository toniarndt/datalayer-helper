/** @internal */
export function flatten(object: Record<string, unknown>, prefix = ''): Record<string, unknown> {
  const flattened: Record<string, unknown> = {};
  Object.keys(object).forEach((key) => {
    if (typeof object[key] === 'object' && object[key] !== null) {
      Object.assign(flattened, flatten(object[key] as Record<string, unknown>, prefix + key + '_'));
    } else {
      flattened[prefix + key] = object[key];
    }
  });
  return flattened;
}
