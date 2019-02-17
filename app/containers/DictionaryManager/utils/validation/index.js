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
  if (!validateInconsistency(rows, newRow)) throw INCONSISTENT;
  if (!validateDuplication(rows, newRow)) throw DUPLICATED;
  if (!validateChains(rows, newRow)) throw CHAIN;
  return true;
}

export default validate;
