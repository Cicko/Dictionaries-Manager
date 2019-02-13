import { createSelector } from 'reselect';
import { initialState } from './store/reducer';

/**
 * Direct selector to the dictionaryManager state domain
 */

const selectDictionaryManagerDomain = state =>
  state.get('dictionaryManager', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DictionaryManager
 */

const makeSelectDictionaryManager = () =>
  createSelector(selectDictionaryManagerDomain, substate => substate.toJS());

export default makeSelectDictionaryManager;
export { selectDictionaryManagerDomain };
