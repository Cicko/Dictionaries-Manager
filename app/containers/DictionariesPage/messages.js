/*
 * DictionariesPage Messages
 *
 * This contains all the text for the DictionariesPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.DictionariesPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Available Dictionaries',
  },
  tableError: {
    id: `${scope}.tableError`,
    defaultMessage: 'Error mi niño joder',
  },
  warningError: {
    id: `${scope}.tableWarning`,
  },
});
