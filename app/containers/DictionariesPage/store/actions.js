/*
 *
 * DictionariesPage actions
 *
 */

import {
  ADD_DICTIONARY,
  ADD_EXISTING_DICTIONARY,
  UPDATE_DICTIONARY,
  REMOVE_DICTIONARY,
  SET_NAME,
  SET_ROW,
  ADD_ROW,
  REMOVE_ROW,
  SELECT_ROW,
} from './constants';

function addDictionary(name) {
  return {
    type: ADD_DICTIONARY,
    name,
  };
}

function addExistingDictionary(dictionary) {
  return {
    type: ADD_EXISTING_DICTIONARY,
    dictionary,
  };
}

function updateDictionary(id, rows) {
  return {
    type: UPDATE_DICTIONARY,
    id,
    rows,
  }
}

function removeDictionary(id) {
  return {
    type: REMOVE_DICTIONARY,
    id,
  };
}

function setTableName(tableId, name) {
  return {
    type: SET_NAME,
    tableId,
    name,
  };
}

function setTableRow(tableId, rowIndex, newRowData) {
  return {
    type: SET_ROW,
    newRowData,
    rowIndex,
    tableId,
  };
}

function addTableRow(tableId, row) {
  return {
    type: ADD_ROW,
    tableId,
    row,
  };
}

function removeTableRow(tableId, row) {
  return {
    type: REMOVE_ROW,
    tableId,
    row,
  };
}

function selectTableRow(tableId, rowIndex) {
  return {
    type: SELECT_ROW,
    tableId,
    rowIndex,
  };
}

export {
  addDictionary,
  addExistingDictionary,
  updateDictionary,
  removeDictionary,
  setTableName,
  setTableRow,
  removeTableRow,
  addTableRow,
  selectTableRow,
};