/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 17.02.19
 *
 */

export const DUPLICATED = {
  importance: 'Medium',
  domain: 'Row already exist',
  range: 'Row already exist',
};
export const INCONSISTENT = {
  importance: 'Medium',
  domain: 'Row with that domain already exist',
};
export const CYCLES = {
  importance: 'Important',
  domain: 'This row produces a cycle in your dictionary',
  range: 'This row produces a cycle in your dictionary',
};
export const CHAIN = {
  importance: 'Important',
  domain: 'This row produces a chain in your dictionary',
  range: 'This row produces a chain in your dictionary',
};
