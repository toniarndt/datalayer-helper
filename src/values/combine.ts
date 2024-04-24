import * as dbg from '../debug';

/**
 * Combines the individual values from different arrays into pairs
 *
 * @param array1 The first array with strings
 * @param array2 The second array with strings
 * @param separator1 Separator for the combined pairs
 * @param separator2 Separator between the individual pair values
 * @returns Returns the combined string
 */
export function combine(
  array1: string[],
  array2: string[],
  separator1: string = ',',
  separator2: string = ':'
): string {
  const combinations: string[] = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      const a = array1[i].trim().replaceAll(separator2, '›'),
        b = array2[j].trim().replaceAll(separator2, '›');
      combinations.push(`${a}${separator2}${b}`);
    }
  }
  dbg.log({
    message: null,
    functionName: 'combination',
    level: 'log',
    args: combinations.join(separator1)
  });
  return combinations.join(separator1);
}
