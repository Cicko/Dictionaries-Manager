/*
 *
 * DictionariesPage reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  ADD_DICTIONARY,
  ADD_EXISTING_DICTIONARY,
  REMOVE_DICTIONARY,
  ADD_ROW,
  REMOVE_ROW,
  SELECT_ROW,
  SET_NAME,
  SET_ROW,
} from './constants';

export const initialState = fromJS({
  dictionaries: List(),
});

function dictionariesPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DICTIONARY:
      return state.update('dictionaries', dictionaries =>
        dictionaries.push({
          id: dictionaries.size,
          name: action.name,
          rows: [],
        }),
      );
    case ADD_EXISTING_DICTIONARY: // Add dictionary with prefilled data.
      return state.update('dictionaries', dictionaries =>
        dictionaries.push({
          id: dictionaries.size,
          name: action.dictionary.name,
          rows: action.dictionary.rows.map(row => ({
            ...row,
            selected: false,
          })),
        }),
      );
    case REMOVE_DICTIONARY:
      return state.updateIn(['dictionaries'], dictionaries =>
        dictionaries.delete(action.id),
      );
    case ADD_ROW:
      return state.update('dictionaries', dictionaries =>
        dictionaries.update(action.tableId, dictionary => ({
          ...dictionary,
          rows: [
            ...dictionary.rows,
            {
              ...action.row,
              id: dictionary.rows.length,
              selected: false,
            },
          ],
        })),
      );
    case SET_NAME:
      return state.update('dictionaries', dictionaries =>
        dictionaries.update(action.tableId, dictionary =>
          dictionary.set('name', action.name),
        ),
      );
    case SET_ROW:
      return state.update('dictionaries', dictionaries =>
        dictionaries.update(action.tableId, dictionary =>
          dictionary.update('rows', rows =>
            rows.update(action.rowIndex, row => ({
              ...row,
              ...action.newRowData,
            })),
          ),
        ),
      );
    case SELECT_ROW:
      return state.update('dictionaries', dictionaries =>
        dictionaries.update(action.tableId, dictionary => ({
          ...dictionary,
          rows: dictionary.rows.map(
            (row, index) =>
              index === action.rowIndex
                ? ({
                  ...row,
                  selected: !row.selected,
                })
                : row,
          ),
        })),
      );
    case REMOVE_ROW:
      return state.update('dictionaries', dictionaries =>
        dictionaries.update(action.tableId, dictionary => ({
          ...dictionary,
          rows: dictionary.rows.filter(row => !row.selected),
        })),
      );
    default:
      return state;
  }
}

export default dictionariesPageReducer;
