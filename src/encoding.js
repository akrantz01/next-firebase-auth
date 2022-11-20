/**
 * Decode a base64 value to a string.
 *
 * @param {String} string
 * @return {String}
 */
export const decodeBase64 = (string) =>
  Buffer.from(string, 'base64').toString('utf8')

/**
 * Encode a string into a base64 string.
 *
 * @param {String} string
 * @return {String}
 * @private
 */
export const encodeBase64 = (string) => Buffer.from(string).toString('base64')
