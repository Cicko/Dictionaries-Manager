/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/12/19
 *
 */

import {
  NAV_DRAWER_TOGGLE,
} from './constants';

/**
 * function that returns an action to toggle the navigation drawer.
 */
function toggleNavDrawer() {
  return {
    type: NAV_DRAWER_TOGGLE,
  };
}

export {
  toggleNavDrawer,
};
