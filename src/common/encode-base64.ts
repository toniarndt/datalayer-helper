/**
 * Encodes a string to base64
 *
 * @param value The string to be encoded
 * @returns The encoded string
 */
export function encodeBase64(value: string): string {
  return btoa(unescape(encodeURIComponent(value)));
}
