/*
 * AppBar Messages
 *
 * This contains all the text for the AppBar component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.AppBar';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Welcome to the Dictionary Management App',
  },
});
