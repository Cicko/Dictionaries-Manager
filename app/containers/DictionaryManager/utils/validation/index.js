/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 17.02.19
 *
 */
import validateDuplication from './validateDuplication';
import validateInconsistency from './validateInconsistency';
import validateChains from './validateChains';
import { DUPLICATED, CHAIN, INCONSISTENT } from './messages';


function validate(rows, newRow) {
  if (!validateDuplication(rows, newRow)) return DUPLICATED;
  if (!validateInconsistency(rows, newRow)) return INCONSISTENT;
  if (!validateChains(rows, newRow)) return CHAIN;
  return true;
}

export default validate;
