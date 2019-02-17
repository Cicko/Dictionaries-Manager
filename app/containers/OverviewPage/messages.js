/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/12/19
 *
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.OverviewPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Overview',
  },
  dictionarySelectLabel: {
    id: `${scope}.dictionarySelect`,
    defaultMessage: 'Select dictionary',
  },
});
