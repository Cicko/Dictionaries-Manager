/*
 *
 * DictionariesPage actions
 *
 */

import { ADD_DICTIONARY, ADD_EXISTING_DICTIONARY, UPDATE_DICTIONARY, REMOVE_DICTIONARY } from './constants';

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

export {
  addDictionary,
  addExistingDictionary,
  updateDictionary,
  removeDictionary,
};
