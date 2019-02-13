import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dictionariesPage state domain
 */

const selectDictionariesPageDomain = state =>
  state.get('dictionariesPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DictionariesPage
 */

const makeSelectDictionariesPage = () =>
  createSelector(selectDictionariesPageDomain, substate => substate.toJS());

export default makeSelectDictionariesPage;
export { selectDictionariesPageDomain };
