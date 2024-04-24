/** @internal */
export function clone<T>(object: T): T {
  if (object === null || typeof object !== 'object') {
    return object;
  }

  if (Array.isArray(object)) {
    const copyArray = object.map((item) => clone(item));
    return copyArray as T;
  }

  const copyObj: Record<string, unknown> = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      copyObj[key] = clone(object[key]);
    }
  }

  return copyObj as T;
}
