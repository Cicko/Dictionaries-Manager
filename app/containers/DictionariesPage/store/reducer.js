/*
 *
 * DictionariesPage reducer
 *
 */

import { fromJS, List } from 'immutable';
import { ADD_DICTIONARY, REMOVE_DICTIONARY } from './constants';

export const initialState = fromJS({
  dictionaries: List(),
});

function dictionariesPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DICTIONARY:
      return state.updateIn(['dictionaries'], dictionaries =>
        dictionaries.push({
          id: dictionaries.length,
          name: action.name,
          rows: [],
        }),
      );
    case REMOVE_DICTIONARY:
      return state.updateIn(['dictionaries'], dictionaries =>
        dictionaries.delete(action.id),
      );
    default:
      return state;
  }
}

export default dictionariesPageReducer;
