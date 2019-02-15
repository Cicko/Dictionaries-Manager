/*
 *
 * DictionaryManager reducer
 *
 */

import { fromJS, List } from 'immutable';
import { SET_ROW, SET_NAME, ADD_ROW, REMOVE_ROW, SELECT_ROW } from './constants';

export const initialState = fromJS({
  id: 0,
  name: '',
  rows: List(),
});

function dictionaryManagerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW:
      return state.updateIn('rows', rows => rows.push(action.row));
    case SET_NAME:
      return state.set('name', action.name);
    case SET_ROW:
      return state.updateIn('rows', rows =>
        rows.update(action.rowIndex, row => ({
          row,
          ...action.newRowData,
        })),
      );
    case SELECT_ROW:
      return state.updateIn('rows', rows =>
        rows.update(action.rowIndex, row => ({
          ...row,
          selected: !row.selected,
        })),
      );
    case REMOVE_ROW:
      return state;
    default:
      return state;
  }
}

export default dictionaryManagerReducer;
