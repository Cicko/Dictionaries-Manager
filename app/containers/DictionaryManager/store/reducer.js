/*
 *
 * DictionaryManager reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_ROW, SET_NAME, ADD_ROW, REMOVE_ROW } from './constants';

export const initialState = fromJS({
  id: 0,
  name: '',
  rows: [],
});

function dictionaryManagerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW:
      return state.updateIn('rows', rows => rows.push(action.row));
    case SET_NAME:
      return state;
    case SET_ROW:
      return state;
    case REMOVE_ROW:
      return state;
    default:
      return state;
  }
}

export default dictionaryManagerReducer;
