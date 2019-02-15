/*
 *
 * DictionaryManager actions
 *
 */

import {
  SET_NAME,
  SET_ROW,
  ADD_ROW,
  REMOVE_ROW,
  SELECT_ROW,
} from './constants';

function setTableName(name) {
  return {
    type: SET_NAME,
    name,
  };
}

function setTableRow(rowIndex, newRowData) {
  return {
    type: SET_ROW,
    newRowData,
    rowIndex,
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

function selectTableRow(rowIndex) {
  return {
    type: SELECT_ROW,
    rowIndex,
  };
}

export {
  setTableName,
  setTableRow,
  removeTableRow,
  addTableRow,
  selectTableRow,
}
