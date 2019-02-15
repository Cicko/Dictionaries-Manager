/*
 *
 * DictionariesPage reducer
 *
 */

import { fromJS, List } from 'immutable';
import { ADD_DICTIONARY, ADD_EXISTING_DICTIONARY, UPDATE_DICTIONARY, REMOVE_DICTIONARY } from './constants';

export const initialState = fromJS({
  dictionaries: List(),
});

function dictionariesPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DICTIONARY:
      return state.updateIn(['dictionaries'], dictionaries =>
        dictionaries.push({
          id: dictionaries.size,
          name: action.name,
          rows: [],
        }),
      );
    case ADD_EXISTING_DICTIONARY:
      return state.updateIn(['dictionaries'], dictionaries =>
        dictionaries.push({
          id: dictionaries.size,
          ...action.dictionary,
        }),
      );
    case UPDATE_DICTIONARY:
      return state.updateIn(['dictionaries'], dictionaries =>
        dictionaries.update(action.id, dictionary => ({
          ...dictionary,
          rows: action.rows,
        })),
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
