/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 17.02.19
 *
 */
import { find, isEmpty } from 'lodash';

/**
 * Check if the row is already existing within the existing ones.
 * @param rows
 * @param newRow
 */
function validateInconsistency(rows, newRow) {
  return isEmpty(find(rows, row =>
    row.domain === newRow.domain));
}

export default validateInconsistency;
