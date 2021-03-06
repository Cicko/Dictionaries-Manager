/**
 * Combine all reducers in this file and export the combined reducers.
 */

import languageProviderReducer from 'containers/LanguageProvider/reducer';
import genericReducer from 'containers/App/store/reducer';
import dictionariesReducer from 'containers/DictionariesPage/store/reducer';

export default {
  language: languageProviderReducer,
  generic: genericReducer,
  dictionaries: dictionariesReducer,
}