/**
 * Decodes a string from base64
 *
 * @param value The string to be decoded
 * @returns The decoded string
 */
export function decodeBase64(value: string): string {
  return decodeURIComponent(escape(atob(value)));
}
