/*
 *
 * DictionariesPage reducer
 *
 */

import { fromJS, List, Map, } from 'immutable';
import { isEmpty } from 'lodash';
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
import validate from '../../DictionaryManager/utils/validation';

export const initialState = fromJS({
  dictionaries: List(),
});

function dictionariesPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DICTIONARY:
      return state.update('dictionaries', dictionaries => {
        const dict = Map({
          id: dictionaries.size,
          name: action.name,
          rows: [],
        });
        return dictionaries.push(dict);
      });
    case ADD_EXISTING_DICTIONARY: // Add dictionary with prefilled data.
      return state.updateIn(['dictionaries'], dictionaries => {
        const dict = Map({
          id: dictionaries.size,
          ...action.dictionary.toJS(),
        });
        return dictionaries.push(dict);
      });
    case REMOVE_DICTIONARY:
      return state.updateIn(['dictionaries'], dictionaries =>
        dictionaries.delete(action.id),
      );
    case ADD_ROW:
      return state.update('dictionaries', dictionaries =>
        dictionaries.update(action.tableId, dictionary =>
          dictionary.update('rows', rows => {
            rows.push({
              ...action.row,
              id: rows.length,
              selected: false,
              error: validate(rows, action.row),
            });
            return rows;
          }),
        ),
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
        dictionaries.update(
          action.tableId,
          dictionary => dictionary.update('rows', rows => {
            if (List.isList(rows)) {
              return rows.update(action.rowIndex, row =>
                row.update('selected', selected => !selected),
              );
            }
            return rows.map((row, index) => ({
              ...row,
              selected:
                action.rowIndex === index ? !row.selected : row.selected,
            }));
          }),
        ),
      );
    case REMOVE_ROW:
      return state.update('dictionaries', dictionaries =>
        dictionaries.update(action.tableId, dictionary =>
          dictionary.update('rows', rows => {
              if (List.isList(rows)) {
                return rows.filter((row) => !row.selected)
              } else {
                return rows.filter((row) => !row.selected);
              }
            }
          ),
        ),
      );
    default:
      return state;
  }
}

export default dictionariesPageReducer;
