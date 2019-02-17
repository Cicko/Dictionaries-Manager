/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 17.02.19
 *
 */
import { find, isEmpty } from 'lodash';

/**
 * Check if the row will produce a chain within the dictionary.
 * @param rows
 * @param newRow
 */
function validateChains(rows, newRow) {
  return isEmpty(find(rows, row =>
    row.range === newRow.domain));
}

export default validateChains;
