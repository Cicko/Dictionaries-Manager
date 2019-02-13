/*
 *
 * DictionaryManager actions
 *
 */

import { SET_NAME, SET_ROW, ADD_ROW, REMOVE_ROW } from './constants';

function setTableName(name) {
  return {
    type: SET_NAME,
    name,
  };
}

function setTableRow(row) {
  return {
    type: SET_ROW,
    row,
  };
}

function addTableRow(row) {
  return {
    type: ADD_ROW,
    row,
  };
}

function removeTableRow(row) {
  return {
    type: REMOVE_ROW,
    row,
  };
}

export {
  setTableName,
  setTableRow,
  removeTableRow,
  addTableRow,
}
