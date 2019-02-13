/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/13/19
 *
 */
import HomePage from '../OverviewPage/Loadable';
import DictionariesPage from '../DictionariesPage/Loadable';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/dictionaries',
    component: DictionariesPage,
  },
];
