/*
 *
 * DictionariesPage actions
 *
 */

import { ADD_DICTIONARY, REMOVE_DICTIONARY } from './constants';

function addDictionary(name) {
  return {
    type: ADD_DICTIONARY,
    name,
  };
}

function removeDictionary(id) {
  return {
    type: REMOVE_DICTIONARY,
    id,
  };
}

export {
  addDictionary,
  removeDictionary,
};
